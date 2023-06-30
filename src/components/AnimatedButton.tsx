import { Status } from "@/types/status"

interface AnimatedButtonProps {
  status: Status;
  message: string;
}

const AnimatedButton = ({ message, status }: AnimatedButtonProps) => {
  const statusIcons = {
    "": "",
    error: "assets/icons/error.svg",
    success: "assets/icons/check.svg",
    pending: "assets/icons/spinner.svg",
  }

  return (
    <section className="status-container">
      <button type="submit" disabled={!!status}>
        <p id="btn-inner-text">SEND</p>
        <img
          id="pending-icon"
          src={statusIcons["pending"]}
          alt={!!status ? "Pending" : ""}
        />
      </button>
      <div id="status-sent">
        <img src={statusIcons[status]} alt={status} />
        <h3>{status.toUpperCase()}</h3>
        <p>{message}</p>
      </div>
    </section>
  )
}

export default AnimatedButton