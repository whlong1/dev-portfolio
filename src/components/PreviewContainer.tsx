// React/Hooks
import { CSSProperties, useState } from "react"

// Components
import ModalContainer from "./ModalContainer"

// Types
import { Image } from "@/types/models"

interface PreviewStyle {
  zIndex?: number;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  position?: "absolute";
}

interface PreviewContainerProps {
  images: Image[];
  isCardEven: boolean;
  isThemeDark: boolean;
  previewContainerStyle: CSSProperties;
}

const PreviewContainer = (props: PreviewContainerProps) => {
  const {
    images,
    isCardEven,
    isThemeDark,
    previewContainerStyle,
  } = props

  const [selectedId, setSelectedId] = useState<string>("")
  const [modalImgPath, setModalImgPath] = useState<string>("")
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined)

  const theme = isThemeDark ? "dark" : "light"

  // Initial Style
  const getPreviewStyle = (imgIdx: number): PreviewStyle => {
    const offset = imgIdx * 36
    return isCardEven
      ? { marginTop: `${offset}px`, marginLeft: `${offset}px`, zIndex: imgIdx }
      : { marginRight: `${offset}px`, marginTop: `${offset}px`, zIndex: Math.abs(imgIdx - 2) }
  }

  // Calc zIndex of cards on selection
  const calcZIndex = (imgIdx: number): PreviewStyle => {
    const isSelected = images[imgIdx].id === selectedId
    const inactiveZIndex = selectedId && !isSelected && imgIdx !== 1 ? 0 : imgIdx
    return isSelected
      ? { zIndex: 10 } // Selected style
      : { zIndex: inactiveZIndex } // Inactive Style
  }

  const handleMouseOver = (id: string) => {
    if (timeoutId) clearTimeout(timeoutId)
    const newTimeoutId: number = window.setTimeout(() => setSelectedId(id), 250)
    setTimeoutId(newTimeoutId)
  }

  const handleModal = (srcPath: string) => {
    setModalImgPath(srcPath)
  }

  return (
    <section className="preview-container" style={previewContainerStyle}>

      {modalImgPath && <ModalContainer modalImgPath={modalImgPath} handleModal={handleModal} />}

      {images.map((image, imgIdx) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={`layered-image ${theme}`}
          onClick={() => handleModal(image.src)}
          onMouseLeave={() => clearTimeout(timeoutId)}
          onMouseOver={() => { if (image.id) handleMouseOver(image.id) }}
          style={{ ...getPreviewStyle(imgIdx), ...calcZIndex(imgIdx), position: "absolute" }}
        />
      ))}
      <img className="single-image" src={images[2].src} alt={images[2].alt} />

    </section>
  )
}

export default PreviewContainer
