import { fabric } from 'fabric'
import React from 'react'
import { CanvasProvider } from '../utils/canvasContext'

export interface CanvasProps {
  children?: React.ReactChild | React.ReactChild[]
}

export function Canvas(props: CanvasProps): React.ReactElement {
  const [ref, canvas] = useCanvasSetup()
  return (
    <div ref={ref}>
      <CanvasProvider value={canvas}>{props.children}</CanvasProvider>
    </div>
  )
}

function useCanvasSetup() {
  const [$canvas, canvas] = React.useMemo(() => {
    const _$canvas = document.createElement('canvas')
    _$canvas.width = 300
    _$canvas.height = 300

    const _canvas = new fabric.Canvas(_$canvas)

    return [_$canvas, _canvas] as const
  }, [])

  const ref = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    ref.current.appendChild($canvas)
    return () => {
      ref.current.removeChild($canvas)
    }
  }, [])

  return [ref, canvas] as const
}
