import { NextResponse } from "next/server";

type LeadSubmission = {
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  currentState?: string;
  preferredLocation?: string;
  preferredWorkStyle?: string;
  compensationGoal?: string;
  whatMattersMost?: string;
};

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead submission is not configured.",
        },
        { status: 500 }
      );
    }

    const data = (await request.json()) as LeadSubmission;

    const payload = {
      fullName: data.fullName?.trim() || "",
      email: data.email?.trim() || "",
      phone: data.phone?.trim() || "",
      role: data.role?.trim() || "",
      currentState: data.currentState?.trim() || "",
      preferredLocation: data.preferredLocation?.trim() || "",
      preferredWorkStyle: data.preferredWorkStyle?.trim() || "",
      compensationGoal: data.compensationGoal?.trim() || "",
      whatMattersMost: data.whatMattersMost?.trim() || "",
    };

    if (
      !payload.fullName ||
      !payload.email ||
      !payload.phone ||
      !payload.role ||
      !payload.currentState ||
      !payload.preferredLocation ||
      !payload.preferredWorkStyle
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete every required field.",
        },
        { status: 400 }
      );
    }

    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
    });

    if (!googleResponse.ok) {
      throw new Error(
        `Google Apps Script returned status ${googleResponse.status}.`
      );
    }

    const responseText = await googleResponse.text();

    if (responseText.trim()) {
      try {
        const googleResult: unknown = JSON.parse(responseText);

        if (
          googleResult &&
          typeof googleResult === "object" &&
          "success" in googleResult &&
          googleResult.success === false
        ) {
          const errorMessage =
            "error" in googleResult && typeof googleResult.error === "string"
              ? googleResult.error
              : "The lead could not be saved.";

          throw new Error(errorMessage);
        }
      } catch (error) {
        if (
          error instanceof Error &&
          error.message !== "Unexpected end of JSON input"
        ) {
          console.log("Google response:", responseText);
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
