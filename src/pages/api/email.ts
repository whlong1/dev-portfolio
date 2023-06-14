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

const formatName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

const sendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse<Res>
): Promise<void> => {

  const lastName: string = formatName(req.body.lastName)
  const firstName: string = formatName(req.body.firstName)

  const confirmationMsg = `
    <h1>Message Confirmation</h1>
    <p>Hello ${firstName},</p>

    <p>
      Thank you for reaching out. 
      I've received your message and will get back to you as soon as possible. 
      For reference, I've included a copy of your original message below.
    </p>

    <blockquote 
      title="Original message"
      style="margin-left: 0; padding: 10px 20px; border-radius: 3px; background-color: #F2F4F8; font-style: italic"
    >
      ${req.body.message}
    </blockquote>

    <p style="margin-bottom: 4px">Best regards,</p>
    <p style="margin-top: 4px">Hunter Long</p>
  `

  const message: Message = {
    cc: req.body.email,
    html: confirmationMsg,
    text: req.body.message,
    to: process.env.EMAIL_ADDRESS!,
    from: process.env.EMAIL_ADDRESS!,
    subject: `Your Message to Hunter Long Has Been Received, ${firstName} ${lastName}`,
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