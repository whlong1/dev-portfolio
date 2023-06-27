import { ReactNode } from "react"

const FormRow = ({ children }: { children: ReactNode }) => (
  <div className="form-row">{children}</div>
)

export default FormRow