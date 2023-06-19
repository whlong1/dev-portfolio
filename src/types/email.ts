interface Message {
  cc: string;
  to: string;
  html: string;
  text: string;
  from: string;
  subject: string;
}

interface ErrorResponse { error: string; }
interface SuccessResponse { msg: string; sender: string; ok: boolean }

// type Res = ErrorResponse | SuccessResponse

export type { Message, ErrorResponse, SuccessResponse }