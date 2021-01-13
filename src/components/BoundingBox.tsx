import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalMouseUp, useGlobalMouseMove } from 'src/hooks'


interface Props {
	x: string,
	y: string,
	width: string,
	height: string,
	to: string,
	resetTransform: () => void
	highlightCount: number
}

const BoundingBox = ({
	x,
	y,
	width,
	height,
	to,
	resetTransform,
	highlightCount

}: Props) => {

	const { fileName } = useParams<{ fileName: string }>()
	const isMouseDownRef = useRef(false)
	const [ isValidClick, setIsValidClick ] = useState(true)
	const isFirstRenderRef = useRef(true)
	const linkRef = useRef<HTMLAnchorElement | null>(null)
	const divRef = useRef<HTMLDivElement | null>(null)

	const style = {
		top: y,
		left: x,
		width,
		height,
		pointerEvents: isValidClick ? 'auto' : 'none' as 'auto' | 'none'
	}
	useEffect(() => resetTransform(), [ to ])

	useEffect(() => {
		if (!isFirstRenderRef.current) {

			linkRef.current?.classList.contains('highlight') && linkRef.current?.classList.remove('highlight')
			setTimeout(() => linkRef.current?.classList.add('highlight'), 17)
			divRef.current?.classList.contains('highlight') && divRef.current?.classList.remove('highlight')
			setTimeout(() => divRef.current?.classList.add('highlight'), 17)
		}
		isFirstRenderRef.current = false
	}, [ highlightCount ])

	function handleMouseDown() {
		isMouseDownRef.current = true
	}

	useGlobalMouseMove(() => {
		isMouseDownRef.current && setIsValidClick(false)
		setTimeout(() => setIsValidClick(true), 3000)
	})

	useGlobalMouseUp(() => {
		setIsValidClick(true)
		isMouseDownRef.current = false
	})

	return to === fileName
		? (
			<div
				ref={divRef}
				className='bounding_box'
				style={style}>
				Imagine it's a Bounding box
			</div>
		)
		: (
			<Link
				ref={linkRef}
				onMouseDown={handleMouseDown}
				className='bounding_box'
				style={style}
				to={to}>
				Imagine it's a Bounding box
			</ Link>
		)

}

export default BoundingBox;