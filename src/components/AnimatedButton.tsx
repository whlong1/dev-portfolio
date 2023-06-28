const AnimatedButton = ({ pending }: { pending: boolean }) => {
  return (
    <section className="status-container">
      <button type="submit" disabled={pending}>
        <p id="btn-inner-text">SEND</p>
        <img
          id="pending-icon"
          src="assets/tech/spinner.svg"
          alt={pending ? "Loading" : ""}
        />
      </button>
      <div id="status-sent">
        <img src="assets/tech/check.svg" alt="Success" />
        <h3>SUCCESS</h3>
        <p>A confirmation email has been sent to whunterlong@gmail.com</p>
      </div>
    </section>
  )
}

export default AnimatedButton