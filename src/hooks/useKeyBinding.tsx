import { useEffect, useRef, useMemo } from 'react'
import { useGlobalKeyDown, useGlobalKeyUp } from 'src/hooks'

const useKeyBinding = () => {

	const keyBindingRef = useRef<string[]>([])
	const isValidRef = useRef<boolean>(true)

	useGlobalKeyDown(e => {
		isValidRef.current = true
		if (keyBindingRef.current.includes(e.key)) return
		keyBindingRef.current = [ ...keyBindingRef.current, e.key ]
		console.log(keyBindingRef.current)
	})

	useGlobalKeyUp(e => {
		isValidRef.current = false
		keyBindingRef.current = keyBindingRef.current.filter(key => key !== e.key)
		console.log(keyBindingRef.current)
	})

	useEffect(() => {
		const resetKeyBinding = () => {
			keyBindingRef.current = []
		}

		window.addEventListener('blur', resetKeyBinding)

		return () => window.removeEventListener('blur', resetKeyBinding)
	}, [])

	const keyBinding = useMemo(() => ({
		matches(...keys: string[]) {
			return isValidRef.current
				? JSON.stringify(keys) === JSON.stringify(keyBindingRef.current)
				: false
		}
	}), [])

	return keyBinding
}

export default useKeyBinding