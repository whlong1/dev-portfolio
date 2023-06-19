interface Mail {
  cc: string;
  to: string;
  html: string;
  text: string;
  from: string;
  subject: string;
}

// Discriminated Unions:
// https://medium.com/@ahsan.ayaz/understanding-discriminated-unions-in-typescript-1ccc0e053cf5

type ErrorResponse = { type: "error", message: string; }
type SuccessResponse = { type: "success", message: string, sender: string }
type SendEmailResponse = ErrorResponse | SuccessResponse

export type { Mail, SendEmailResponse }