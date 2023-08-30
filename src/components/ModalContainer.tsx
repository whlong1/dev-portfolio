import { useEffect } from "react"

interface ModalContainerProps {
  modalImgPath: string;
  handleModal: (srcPath: string) => void;
}

const ModalContainer = ({ modalImgPath, handleModal }: ModalContainerProps) => {

  const handleResize = () => {
    if (window.innerWidth < 900) handleModal("")
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="modal-container" onClick={() => handleModal("")}>
      <div className="image-wrapper">
        <button onClick={() => handleModal("")}>
          X
        </button>
        <img onClick={(e) => e.stopPropagation()} src={modalImgPath} alt="Preview" />
      </div>
    </div>
  )
}

export default ModalContainer