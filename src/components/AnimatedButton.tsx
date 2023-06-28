interface AnimatedButtonProps {
  message: string;
  status: string;
}

const AnimatedButton = ({ message, status }: AnimatedButtonProps) => {
  return (
    <section className="status-container">
      <button type="submit" disabled={!!status}>
        <p id="btn-inner-text">SEND</p>
        <img
          id="pending-icon"
          src="assets/tech/spinner.svg"
          alt={!!status ? "Loading" : ""}
        />
      </button>
      <div id="status-sent">
        <img src="assets/tech/check.svg" alt="Success" />
        <h3>{status.toUpperCase()}</h3>
        <p>{message}</p>
      </div>
    </section>
  )
}

export default AnimatedButton