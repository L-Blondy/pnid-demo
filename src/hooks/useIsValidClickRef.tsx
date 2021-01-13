import { useRef } from 'react'
import { useGlobalMouseUp, useGlobalMouseMove, useGlobalMouseDown } from 'src/hooks'

const useIsValidClickRef = () => {

	const isValidClickRef = useRef(true)
	const isMouseDownRef = useRef(false)

	useGlobalMouseDown(() => {
		isMouseDownRef.current = true
	})

	useGlobalMouseMove(() => {
		if (!isMouseDownRef.current) return
		isValidClickRef.current = false
	})

	useGlobalMouseUp(() => {
		setTimeout(() => {
			isValidClickRef.current = true
		})
		isMouseDownRef.current = false
	})

	return isValidClickRef
}

export default useIsValidClickRef