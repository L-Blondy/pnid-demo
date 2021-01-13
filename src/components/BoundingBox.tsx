import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalMouseUp, useGlobalMouseMove } from 'src/hooks'


interface Props {
	minX: number,
	minY: number,
	maxX: number,
	maxY: number,
	to: string,
	resetTransform: () => void
	highlightCount: number
}

const BoundingBox = ({
	minX,
	minY,
	maxX,
	maxY,
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
	const isMountedRef = useRef(true)

	const style = {
		left: minX * 100 + '%',
		top: minY * 100 + '%',
		right: (1 - maxX) * 100 + '%',
		bottom: (1 - maxY) * 100 + '%',
		pointerEvents: isValidClick ? 'auto' : 'none' as 'auto' | 'none'
	}

	useEffect(() => resetTransform(), [ to ])

	useEffect(() => {
		isMountedRef.current = false
	}, [])

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
		setTimeout(() => !isMouseDownRef.current && setIsValidClick(true), 3000)
	})

	useGlobalMouseUp(() => {
		setIsValidClick(true)
		isMouseDownRef.current = false
	})

	useEffect(() => {
		console.log(isValidClick)
	}, [ isValidClick ])

	return (
		<Link
			ref={linkRef}
			onMouseDown={handleMouseDown}
			className='bounding_box'
			style={style}
			to={to}
		/>
	)

}

export default React.memo(BoundingBox);