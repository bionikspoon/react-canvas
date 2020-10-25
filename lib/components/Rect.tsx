import { fabric } from 'fabric'
import React from 'react'
import { useCanvas } from '../utils/canvasContext'

export interface RectProps extends fabric.IRectOptions {}

export function Rect(props: RectProps): JSX.Element {
  const canvas = useCanvas()
  const ref = React.useRef<fabric.Rect>(null)

  React.useEffect(() => {
    ref.current = new fabric.Rect(props)

    canvas.add(ref.current)
    return () => {
      canvas.remove(ref.current)
    }
  }, [])

  console.log('always props', props)
  React.useEffect(() => {
    console.log('sometimes props', props)

    canvas.add(ref.current.set(props))
  }, Object.values(props))

  return <div />
}
