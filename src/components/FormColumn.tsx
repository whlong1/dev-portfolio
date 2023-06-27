type InputTextEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

interface FormColumnProps {
  name: string;
  type: string;
  label: string;
  value: string;
  handleChange: (event: InputTextEvent) => void;
}

const Input = (props: FormColumnProps) => {
  const { handleChange, value, type, name, label } = props

  const multiLine = (
    <textarea
      required
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
    />
  )

  const singleLine = (
    <input
      required
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    />
  )

  return (
    <div className="form-column">
      <label htmlFor={name}>{label}</label>
      {name === "message" ? multiLine : singleLine}
    </div>
  )
}

export default Input