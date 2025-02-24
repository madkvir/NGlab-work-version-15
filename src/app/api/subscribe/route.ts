import { NextResponse } from "next/server";
import axios from "axios";

const EMAIL_TEMPLATE_IDS = {
  ua: "505bc1cb-7b42-4509-bfa1-8a088e7c379f",
  ru: "0974c0b3-3a60-405b-b829-a92eb28dd6f5",
  es: "99b8ad34-ed84-4ebc-a7a6-ceeb2955b44a",
  de: "eccb2c7b-1f06-44e6-af6a-96fbd19c48db",
  en: "17849ccd-ebd1-471a-8155-6ca39be1a530",
};

export async function POST(req: Request) {
  try {
    const { email, language } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const { data: tokenData } = await axios.post("https://api.sendpulse.com/oauth/access_token", {
      grant_type: "client_credentials",
      client_id: process.env.SENDPULSE_CLIENT_ID,
      client_secret: process.env.SENDPULSE_CLIENT_SECRET,
    });

    const accessToken = tokenData.access_token;
    const sendpulse_email = process.env.SENDPULSE_EMAIl;
    const template_id = EMAIL_TEMPLATE_IDS[language] ?? EMAIL_TEMPLATE_IDS.en;

    const response = await axios.post(
      `https://api.sendpulse.com/addressbooks/${process.env.SENDPULSE_LIST_ID}/emails`,
      {
        confirmation: "force",
        emails: [{ email }],
        double_optin: 3,
        sender_email: sendpulse_email,
        message_lang: language,
        template_id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ success: true, response: response.data });
  } catch (error: any) {
    console.error("SendPulse error:", error.response?.data || error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
