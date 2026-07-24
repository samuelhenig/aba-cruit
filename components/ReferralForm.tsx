"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ReferralForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      submissionType: "referral",

      referrerFullName: String(formData.get("referrerFullName") || "").trim(),
      referrerEmail: String(formData.get("referrerEmail") || "").trim(),
      referrerPhone: String(formData.get("referrerPhone") || "").trim(),

      referralFullName: String(formData.get("referralFullName") || "").trim(),
      referralEmail: String(formData.get("referralEmail") || "").trim(),
      referralPhone: String(formData.get("referralPhone") || "").trim(),

      role: String(formData.get("role") || "").trim(),
      currentState: String(formData.get("currentState") || "").trim(),
      preferredLocation: String(formData.get("preferredLocation") || "").trim(),

      relationship: String(formData.get("relationship") || "").trim(),

      additionalInformation: String(
        formData.get("additionalInformation") || ""
      ).trim(),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit referral.");
      }

      form.reset();

      setStatus("success");

      setMessage(
        "Thank you! Your referral has been submitted successfully."
      );
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit referral."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">

      <Input
        name="referrerFullName"
        placeholder="Your full name"
      />

      <Input
        name="referrerEmail"
        placeholder="Your email"
        type="email"
      />

      <Input
        name="referrerPhone"
        placeholder="Your phone"
        type="tel"
      />

      <Select name="relationship">
        <option value="">Relationship</option>
        <option>Friend</option>
        <option>Former Coworker</option>
        <option>Current Coworker</option>
        <option>Professional Connection</option>
        <option>Other</option>
      </Select>

      <div className="sm:col-span-2 border-t pt-6 mt-2">
        <h3 className="font-black text-lg">
          ABA Professional You're Referring
        </h3>
      </div>

      <Input
        name="referralFullName"
        placeholder="Full name"
      />

      <Select name="role">
        <option value="">Certification or Role</option>
        <option>BCBA</option>
        <option>BCaBA</option>
        <option>RBT</option>
        <option>BT</option>
        <option>Clinical Director</option>
        <option>ABA Supervisor</option>
        <option>Other ABA Professional</option>
      </Select>

      <Input
        name="referralEmail"
        placeholder="Email"
        type="email"
      />

      <Input
        name="referralPhone"
        placeholder="Phone"
        type="tel"
      />

      <Input
        name="currentState"
        placeholder="Current State"
      />

      <Input
        name="preferredLocation"
        placeholder="Preferred Location"
      />

      <textarea
        name="additionalInformation"
        rows={5}
        placeholder="Additional information (optional)"
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 sm:col-span-2"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 font-bold text-white transition hover:bg-navy disabled:opacity-50 sm:col-span-2"
      >
        {status === "submitting"
          ? "Submitting..."
          : "Submit Referral"}

        {status !== "submitting" && (
          <ArrowRight className="ml-2 h-5 w-5" />
        )}
      </button>

      {message && (
        <div
          className={`rounded-2xl px-4 py-4 text-center font-bold sm:col-span-2 ${
            status === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

    </form>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      required
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10"
    />
  );
}

function Select({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <select
      required
      name={name}
      defaultValue=""
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10"
    >
      {children}
    </select>
  );
}
