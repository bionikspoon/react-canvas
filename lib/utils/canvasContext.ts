import { createContext } from './createContext'
import type { fabric } from 'fabric'

export const [useCanvas, CanvasProvider] = createContext<fabric.Canvas>()
