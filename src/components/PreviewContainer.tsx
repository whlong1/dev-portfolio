import { CSSProperties, useState } from "react"
import { Image } from "@/types/models"

interface PreviewStyle {
  zIndex?: number,
  marginTop?: string,
  marginRight?: string,
  marginBottom?: string,
  marginLeft?: string,
  position?: "absolute",
}

interface PreviewContainerProps {
  images: Image[],
  isCardEven: boolean,
  previewContainerStyle: CSSProperties,
}

const PreviewContainer = (props: PreviewContainerProps) => {
  const {
    images,
    isCardEven,
    previewContainerStyle
  } = props

  const [selectedId, setSelectedId] = useState<string>("")
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined)

  // Initial Style
  const getPreviewStyle = (imgIdx: number): PreviewStyle => {
    const offset = imgIdx * 36
    return isCardEven
      ? { marginTop: `${offset}px`, marginLeft: `${offset}px`, zIndex: imgIdx }
      : { marginRight: `${offset}px`, marginTop: `${offset}px`, zIndex: Math.abs(imgIdx - 2) }
    // : { marginRight: `${offset}px`, marginBottom: `${offset}px`, zIndex: Math.abs(imgIdx - 2) }
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

  return (
    <section className="preview-container" style={previewContainerStyle}>
      {images.map((image, imgIdx) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="layered-image"
          onMouseLeave={() => clearTimeout(timeoutId)}
          onMouseOver={() => { if (image.id) handleMouseOver(image.id) }}
          style={{ ...getPreviewStyle(imgIdx), ...calcZIndex(imgIdx), position: "absolute" }}
        />
      ))}
      <img className="single-image" src={images[0].src} alt={images[0].alt} />
    </section>
  )
}

export default PreviewContainer
