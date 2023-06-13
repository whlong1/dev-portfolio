import type { NextApiRequest, NextApiResponse } from 'next'

interface ErrorResponse { error: string; }
interface SuccessResponse { msg: string; }

type Res = ErrorResponse | SuccessResponse

function sendEmail(req: NextApiRequest, res: NextApiResponse<Res>) {
  if (req.method === 'POST') {
    console.log('Form data:', req.body)
    res.status(200).json({ msg: 'Success' })
  } else {
    res.status(405).json({ error: `Invalid Method` });
  }
}

export default sendEmail
