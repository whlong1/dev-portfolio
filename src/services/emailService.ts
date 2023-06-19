import { EmailFormData } from "@/types/forms"
import { SendEmailResponse } from "@/types/email"

export const sendEmailService = async (formData: EmailFormData): Promise<SendEmailResponse> => {
  try {
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    return await res.json() as SendEmailResponse
  } catch (error) {
    return { type: 'error', message: 'An unexpected error occurred' }
  }
}