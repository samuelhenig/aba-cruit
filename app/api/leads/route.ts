import { NextResponse } from "next/server";

type LeadSubmission = {
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  currentState?: string;
  preferredLocation?: string;
};

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { success: false, message: "Lead submission is not configured." },
        { status: 500 }
      );
    }

    const data = (await request.json()) as LeadSubmission;

    const fullName = data.fullName?.trim();
    const email = data.email?.trim();
    const phone = data.phone?.trim();
    const role = data.role?.trim();
    const currentState = data.currentState?.trim();
    const preferredLocation = data.preferredLocation?.trim();

    if (
      !fullName ||
      !email ||
      !phone ||
      !role ||
      !currentState ||
      !preferredLocation
    ) {
      return NextResponse.json(
        { success: false, message: "Please complete every field." },
        { status: 400 }
      );
    }

    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        role,
        currentState,
        preferredLocation,
      }),
      redirect: "follow",
      cache: "no-store",
    });

    if (!googleResponse.ok) {
      throw new Error("Google Apps Script rejected the submission.");
    }

    const responseText = await googleResponse.text();

    if (responseText) {
      try {
        const googleResult = JSON.parse(responseText);

        if (googleResult.success === false) {
          throw new Error(
            googleResult.error || "The lead could not be saved."
          );
        }
      } catch (error) {
        if (
          error instanceof Error &&
          error.message !== "Unexpected end of JSON input"
        ) {
          throw error;
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your information has been received.",
    });
  } catch (error) {
    console.error("Lead submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not submit your information. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
