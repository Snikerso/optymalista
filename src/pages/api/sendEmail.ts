import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    try {
      await resend.emails.send({
        to: "kontakt@optymalista.pro",
        from: "kontakt@optymalista.pro",
        subject: "Nowa wiadomość z formularza kontaktowego",
        text: message,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
