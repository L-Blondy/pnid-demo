import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Stage, Layer, Image } from 'react-konva'
import Tooltip, { TooltipData } from './Tooltip'
import BoundingBox from './BoundingBox'

import dataPage1 from 'src/data/dataPage1'
import dataPage2 from 'src/data/dataPage2'
import dataPage3 from 'src/data/dataPage3'

import srcPage1 from 'src/assets/page1.jpg'
import srcPage2 from 'src/assets/page2.jpg'

const fileName1 = srcPage1.split('/').pop() as string
const fileName2 = srcPage2.split('/').pop() as string

const noop = () => { }

interface Props {
	highlightCount: number
}

function Page({
	highlightCount
}: Props) {

	const { fileName } = useParams<{ fileName: string }>()
	const [ img, setImg ] = useState<HTMLImageElement | null>(null)
	const resetRef = useRef(noop)
	const [ tooltipData, setTooltipData ] = useState<TooltipData | null>(null)

	const dataMap = React.useMemo(() => fileName === fileName1
		? dataPage1
		: fileName === fileName2
			? dataPage2
			: dataPage3
		, [ fileName ])

	useEffect(() => {
		setImg(null)
		setTooltipData(null)

		let _img: HTMLImageElement
		_img = document.createElement('img')
		_img.src = '/pnid-demo/static/media/' + fileName
		_img.onload = () => setImg(_img)
		_img.onerror = console.log
	}, [ fileName ])

	console.log('render page')

	const boxMap = React.useMemo(() => (
		dataMap.map(data => (

			<BoundingBox
				key={JSON.stringify(data)}
				minX={data.minX}
				minY={data.minY}
				maxX={data.maxX}
				maxY={data.maxY}
				to={data.to}
				type={data.type}
				content={data.content}
				description={data.description}
				resetTransform={resetRef.current}
				highlightCount={highlightCount}
				setTooltipData={setTooltipData}
			/>
		))
	), [ dataMap, highlightCount ])

	return (

		<TransformWrapper
			wheel={{ step: 200, }}
			options={{ limitToBounds: false, minScale: 0.5, maxScale: 10 }}
			doubleClick={{ disabled: true }}
			reset={{ animation: false, animationTime: 0 }}>

			{({ resetTransform }: any) => {
				resetRef.current = resetTransform

				return (

					<TransformComponent>
						<div className='image-wrapper'>
							<Stage
								className={`image ${!!img ? 'loaded' : 'pending'}`}
								width={3308}
								height={2339}>

								<Layer>
									<Image image={img || undefined} />
								</Layer>

							</Stage>

							{!!img && boxMap}

							<Tooltip data={tooltipData} />

						</div>
					</TransformComponent>
				)
			}}

		</TransformWrapper >
	)
}

export default Page;