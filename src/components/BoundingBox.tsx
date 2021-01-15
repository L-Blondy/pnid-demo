import './BoundingBox.scss'
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalMouseUp, useGlobalMouseMove } from 'src/hooks'
import { TooltipData } from './Tooltip'
import deepEqual from 'react-fast-compare'

interface Props {
	minX: number,
	minY: number,
	maxX: number,
	maxY: number,
	to: string | undefined,
	type: string,
	content: string,
	description: string
	resetTransform: () => void,
	highlightCount: number,
	setTooltipData: React.Dispatch<React.SetStateAction<TooltipData | null>>,
}

const BoundingBox = ({
	minX,
	minY,
	maxX,
	maxY,
	to,
	type,
	content,
	description,
	resetTransform,
	highlightCount,
	setTooltipData,
}: Props) => {

	const isMouseDownRef = useRef(false)
	const isMouseOverRef = useRef(false)
	const [ isValidClick, setIsValidClick ] = useState(true)
	const isFirstRenderRef = useRef(true)
	const linkRef = useRef<HTMLAnchorElement | null>(null)
	const divRef = useRef<HTMLDivElement | null>(null)
	const isMountedRef = useRef(true)
	const tooltipDataRef = useRef({
		type: '',
		content: '',
		description: '',
		centerX: 0,
		topY: 0,
		boundingBox: linkRef.current || divRef.current
	})

	const style = {
		left: minX * 100 + '%',
		top: minY * 100 + '%',
		right: (1 - maxX) * 100 + '%',
		bottom: (1 - maxY) * 100 + '%',
		pointerEvents: isValidClick ? 'auto' : 'none' as 'auto' | 'none'
	}

	useEffect(resetTransform, [ to, resetTransform ])

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

	function handleMouseEnter(e: React.MouseEvent<any>) {
		isMouseOverRef.current = true
		const target: any = e.target
		const { x, y, width, height } = target.getBoundingClientRect()

		tooltipDataRef.current = {
			type,
			content,
			description,
			centerX: x + width / 2,
			topY: y + height + 10,
			boundingBox: linkRef.current || divRef.current
		}
		setTooltipData(tooltipDataRef.current)
	}

	function handleMouseLeave() {
		isMouseOverRef.current = false

		setTimeout(() => {
			setTooltipData(currentData => !isMouseOverRef.current && deepEqual(tooltipDataRef.current, currentData)
				? null
				: currentData
			)
		}, 50)
	}

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

	return to
		? (
			<Link
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`bounding_box ${type}`}
				ref={linkRef}
				onMouseDown={handleMouseDown}
				style={style}
				to={to}
			/>
		) : (
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`bounding_box ${type}`}
				ref={divRef}
				onMouseDown={handleMouseDown}
				style={style}
			/>
		)

}

export default React.memo(BoundingBox);