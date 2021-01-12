import createGlobalListener from './createGlobalListener'
export const useGlobalClick = createGlobalListener('click')
export const useGlobalKeyDown = createGlobalListener('keydown')
export const useGlobalKeyUp = createGlobalListener('keyup')
export const useGlobalMouseDown = createGlobalListener('mousedown')
export const useGlobalMouseMove = createGlobalListener('mousemove')
export const useGlobalMouseUp = createGlobalListener('mouseup')
export const useGlobalWheel = createGlobalListener('wheel')
export { default as useKeyBinding } from './useKeyBinding'