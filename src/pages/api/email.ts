import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

interface ErrorResponse { error: string; }
interface SuccessResponse { msg: string; }

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
    <h1>Thank you for your message!</h1>
    <p>${req.body.message}</p>
  `
  
  const message = {
    cc: req.body.email,
    html: formattedContent,
    text: req.body.message,
    to: process.env.EMAIL_ADDRESS,
    from: process.env.EMAIL_ADDRESS,
    subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
  }

  if (req.method === 'POST') {
    console.log('Form data:', req.body)
    const sendStatus = await transporter.sendMail(message)
    console.log(sendStatus)
    res.status(200).json({ msg: 'Success' })
  } else {
    res.status(405).json({ error: `Invalid Method` })
  }
}

export default sendEmail
