import ContactEmail from "@/components/ContactEmail";
import { NextRequest } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gokhangenc113@gmail.com",
      subject: "This e-mail was sent from Webfolio",
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
