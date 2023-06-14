import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

interface Message {
  cc: string;
  to: string;
  html: string;
  text: string;
  from: string;
  subject: string;
}

interface ErrorResponse { error: string; }
interface SuccessResponse { msg: string; sender: string }
type Res = ErrorResponse | SuccessResponse

const transporter = nodemailer.createTransport({
  port: 465,
  secure: true,
  host: process.env.HOST,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const sendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse<Res>
): Promise<void> => {

  const formattedContent = `
    <h1>Confirmation</h1>
    <p>Thanks for reaching out. I'll get back to you as soon as possible!</p>

    <p>
      <b>Below is a copy of your message for reference:</b>
    </p>

    <blockquote style="margin-left: 0; padding: 10px 20px; border-radius: 5px; background-color: #e8e8e8;">
      ${req.body.message}
    </blockquote>

    <p style="margin-bottom: 8px">Best regards,</p>
    <p style="margin-top: 8px">Hunter Long</p>
  `

  const message: Message = {
    cc: req.body.email,
    html: formattedContent,
    text: req.body.message,
    to: process.env.EMAIL_ADDRESS!,
    from: process.env.EMAIL_ADDRESS!,
    subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
  }

  if (req.method === "POST") {
    try {
      await transporter.sendMail(message)
      res.status(200).json({
        sender: req.body.email,
        msg: "Your message has been sent. Please check the email below for confirmation.",
      })
    } catch (err) {
      console.error("Send Mail Error:", err)
      res.status(500).json({ error: "An error occurred while sending your message." })
    }
  } else {
    res.status(405).json({ error: "Invalid Method" })
  }
}

export default sendEmail