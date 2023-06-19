interface Mail {
  cc: string;
  to: string;
  html: string;
  text: string;
  from: string;
  subject: string;
}

// Discriminated Unions (useful for error handling):
// https://medium.com/@ahsan.ayaz/understanding-discriminated-unions-in-typescript-1ccc0e053cf5
type SendEmailResponse = { type: string, message: string }

export type { Mail, SendEmailResponse }