import './Tooltip.scss'
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';

export interface TooltipData {
	type: string,
	content: string,
	description: string
	centerX: number
	topY: number
	boundingBox: HTMLDivElement | HTMLAnchorElement | null
}

const Tooltip = ({
	data
}: { data: TooltipData | null }) => {

	const [ _data, _setData ] = useState(data)

	const root = document.getElementById('root')

	useEffect(() => {
		if (!data) {
			_setData(data)
			return
		}
		const tooltip = document.querySelector('.tooltip')!

		const { width, height } = tooltip.getBoundingClientRect()
		const { clientHeight, clientWidth } = document.documentElement

		const isXOutLeft = (data.centerX - width / 2) < 0
		const isXOutRight = (data.centerX + width / 2) > clientWidth
		const isYOutBottom = (data.topY + height) > clientHeight


		if (isXOutLeft) {
			_setData({
				...data,
				centerX: width / 2 + 8
			})
		}
		else if (isXOutRight) {
			_setData({
				...data,
				centerX: clientWidth - width / 2 - 8
			})
		}
		else if (isYOutBottom && data.boundingBox) {
			_setData({
				...data,
				topY: data.boundingBox.getBoundingClientRect().y - height - 8
			})
		}
		else {
			_setData(data)
		}
	}, [ data ])

	if (!root || !data) return null

	const style = {
		top: (_data || data).topY + 'px',
		left: (_data || data).centerX + 'px',
		transform: 'translateX(-50%)'
	}

	return ReactDOM.createPortal(
		<div className='tooltip' style={style}>
			<b>Type</b>
			<div className='type'> {data.type === 'lineid' ? 'Line ID' : data.type} </div>

			<b>Content</b>
			<div className='content'> {data.content} </div>

			<b>Description</b>
			<div className='description'> {data.description} </div>
		</div>,
		document.getElementById('root')!
	)
}

export default Tooltip