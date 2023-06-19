import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

import {
  Mail,
  SendEmailResponse,
} from "@/types/email"

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
  res: NextApiResponse<SendEmailResponse>
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

  const mail: Mail = {
    cc: req.body.email,
    html: confirmationMsg,
    text: req.body.message,
    to: process.env.EMAIL_ADDRESS!,
    from: process.env.EMAIL_ADDRESS!,
    subject: `Your Message to Hunter Long Has Been Received, ${firstName} ${lastName}`,
  }

  // Add check for form body
  if (req.method !== "POST") res.status(405).json({ type: "error", message: "Invalid Method" })

  try {
    // await transporter.sendMail(mail)
    res.status(200).json({
      type: "success",
      message: `Success! A confirmation email has been sent to ${req.body.email}`,
    })
  } catch (error) {
    console.error('err',error)
    res.status(500).json({
      type: "error",
      message: "An error occurred while sending your message"
    })
  }

}

export default sendEmail