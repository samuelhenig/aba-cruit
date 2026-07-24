import { NextResponse } from "next/server";

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

    const data = await request.json();

    let payload: Record<string, string>;

    if (data.submissionType === "referral") {
      payload = {
        submissionType: "referral",

        referrerFullName: String(data.referrerFullName || "").trim(),
        referrerEmail: String(data.referrerEmail || "").trim(),
        referrerPhone: String(data.referrerPhone || "").trim(),

        referralFullName: String(data.referralFullName || "").trim(),
        referralEmail: String(data.referralEmail || "").trim(),
        referralPhone: String(data.referralPhone || "").trim(),

        role: String(data.role || "").trim(),
        currentState: String(data.currentState || "").trim(),
        preferredLocation: String(data.preferredLocation || "").trim(),

        relationship: String(data.relationship || "").trim(),
        additionalInformation: String(
          data.additionalInformation || ""
        ).trim(),
      };

      if (
        !payload.referrerFullName ||
        !payload.referrerEmail ||
        !payload.referrerPhone ||
        !payload.referralFullName ||
        !payload.role
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Please complete every required field.",
          },
          { status: 400 }
        );
      }
    } else {
      payload = {
        fullName: String(data.fullName || "").trim(),
        email: String(data.email || "").trim(),
        phone: String(data.phone || "").trim(),
        role: String(data.role || "").trim(),
        currentState: String(data.currentState || "").trim(),
        preferredLocation: String(data.preferredLocation || "").trim(),
        preferredWorkStyle: String(data.preferredWorkStyle || "").trim(),
        compensationGoal: String(data.compensationGoal || "").trim(),
        whatMattersMost: String(data.whatMattersMost || "").trim(),
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

    return NextResponse.json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your information.",
      },
      { status: 500 }
    );
  }
}
