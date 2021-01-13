import { useRef } from 'react'
import { useGlobalMouseUp, useGlobalMouseDown } from 'src/hooks'

const useIsValidClickRef = () => {

	const isValidClickRef = useRef(true)
	const startAtRef = useRef({
		x: 0,
		y: 0
	})

	useGlobalMouseDown((e: MouseEvent) => {

		startAtRef.current = {
			x: e.clientX,
			y: e.clientY
		}
	})

	useGlobalMouseUp((e: MouseEvent) => {
		const distance = Math.sqrt((e.clientX - startAtRef.current.x) ** 2 + (e.clientY - startAtRef.current.y) ** 2)

		if (distance > 10)
			isValidClickRef.current = false

		setTimeout(() => {
			isValidClickRef.current = true
			startAtRef.current = {
				x: 0,
				y: 0
			}
		})
	})

	return isValidClickRef
}

export default useIsValidClickRef