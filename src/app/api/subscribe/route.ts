import { NextResponse } from "next/server";
import axios from "axios";

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

    const response = await axios.post(
      `https://api.sendpulse.com/addressbooks/${process.env.SENDPULSE_LIST_ID}/emails`,
      {
        confirmation: "force",
        emails: [{ email }],
        double_optin: 3,
        sender_email: "vi7lancer@gmail.com",
        message_lang: language,
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
