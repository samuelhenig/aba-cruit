"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function TalentNetworkForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      role: String(formData.get("role") || "").trim(),
      currentState: String(formData.get("currentState") || "").trim(),
      preferredLocation: String(formData.get("preferredLocation") || "").trim(),
      preferredWorkStyle: String(
        formData.get("preferredWorkStyle") || ""
      ).trim(),
      compensationGoal: String(
        formData.get("compensationGoal") || ""
      ).trim(),
      whatMattersMost: String(
        formData.get("whatMattersMost") || ""
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
        throw new Error(
          result.message || "We could not submit your information."
        );
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Thank you. Your information has been received. ABA Cruit will contact you when a relevant opportunity may be a good fit."
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not submit your information. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Input name="fullName" placeholder="Full name" />
      <Input name="email" type="email" placeholder="Email address" />
      <Input name="phone" type="tel" placeholder="Phone number" />

      <Select name="role">
        <option value="">Certification or role</option>
        <option>BCBA</option>
        <option>BCaBA</option>
        <option>RBT</option>
        <option>BT</option>
        <option>Clinical Director</option>
        <option>Regional Director</option>
        <option>ABA Supervisor</option>
        <option>Operations / Administrative</option>
        <option>Other ABA Professional</option>
      </Select>

      <Input name="currentState" placeholder="Current state" />
      <Input name="preferredLocation" placeholder="Preferred state or location" />

      <Select name="preferredWorkStyle">
        <option value="">Preferred work style</option>
        <option>In person</option>
        <option>Hybrid</option>
        <option>Remote</option>
        <option>Open to multiple options</option>
      </Select>

      <Input name="compensationGoal" placeholder="Compensation goal" required={false} />

      <textarea
        name="whatMattersMost"
        placeholder="What matters most in your next opportunity?"
        rows={5}
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-blue focus:ring-2 focus:ring-blue/10 sm:col-span-2"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 font-bold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {status === "submitting" ? "Submitting..." : "Join the Talent Network"}
        {status !== "submitting" && <ArrowRight className="ml-2 h-5 w-5" />}
      </button>

      {message && (
        <div
          role="status"
          className={`rounded-2xl px-4 py-4 text-center text-sm font-bold sm:col-span-2 ${
            status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      <p className="text-center text-xs leading-5 text-slate-500 sm:col-span-2">
        Your information is kept confidential and is not shared with employers
        without your permission.
      </p>
    </form>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
  required = true,
}: {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      required={required}
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-blue focus:ring-2 focus:ring-blue/10"
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
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/10"
    >
      {children}
    </select>
  );
}
