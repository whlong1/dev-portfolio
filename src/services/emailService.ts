import { EmailFormData } from "@/types/forms"
import { SendEmailResponse } from "@/types/email"

export const sendEmailService = async (formData: EmailFormData): Promise<SendEmailResponse> => {
  try {
    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
    const data: SendEmailResponse = await res.json()
    if (data.type === "error") throw new Error(data.message)
    return data
  } catch (error) {
    throw error
  }
}