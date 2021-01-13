import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Stage, Layer, Image } from 'react-konva'
import BoundingBox from './BoundingBox'
import data from 'src/data'

import srcPage1 from 'src/assets/page1.jpg'
import srcPage2 from 'src/assets/page2.jpg'
import srcPage3 from 'src/assets/page3.jpg'

const fileName1 = srcPage1.split('/').pop() as string
const fileName2 = srcPage2.split('/').pop() as string
const fileName3 = srcPage3.split('/').pop() as string

const noop = () => { }

interface Props {
	highlightCount: number
}

function Page({
	highlightCount
}: Props) {

	const { fileName } = useParams<{ fileName: string }>()
	const [ img, setImg ] = useState<HTMLImageElement | null>(null)

	const dataMap = fileName === fileName1
		? data.page1
		: fileName === fileName2
			? data.page2
			: data.page3

	useEffect(() => {
		setImg(null)

		let _img: HTMLImageElement
		_img = document.createElement('img')
		_img.src = '/pnid-demo/static/media/' + fileName
		_img.onload = () => setImg(_img)
		_img.onerror = console.log
	}, [ fileName ])

	console.log('render page')

	return (

		<TransformWrapper
			wheel={{ step: 200, }}
			options={{ limitToBounds: false, minScale: 0.5, maxScale: 10 }}
			doubleClick={{ disabled: true }}
			reset={{ animation: false, animationTime: 0 }}>

			{({ resetTransform }: { resetTransform: () => void }) => (

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

						{!!img && dataMap.map(data => (
							<BoundingBox
								key={JSON.stringify(data)}
								minX={data.minX}
								minY={data.minY}
								maxX={data.maxX}
								maxY={data.maxY}
								to={data.to}
								resetTransform={noop}
								highlightCount={highlightCount}
							/>
						))}


					</div>
				</TransformComponent>
			)}

		</TransformWrapper >
	)
}

export default Page;