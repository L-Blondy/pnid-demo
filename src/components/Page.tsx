import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Stage, Layer, Image } from 'react-konva'
import BoundingBox from './BoundingBox'
import srcPage1 from 'src/assets/page1.jpg'
import srcPage2 from 'src/assets/page2.jpg'
import srcPage3 from 'src/assets/page3.jpg'

function Page() {

	const history = useHistory()
	const params = useParams<{ 0: string }>()
	const [ img, setImg ] = useState<HTMLImageElement>()
	const srcRef = useRef('/' + params[ 0 ])

	const boxBounds = React.useMemo(() => {
		if (srcRef.current === srcPage1) {
			return {
				x: '30%',
				y: '10%',
				width: '10%',
				height: '10%'
			}
		}
		if (srcRef.current === srcPage2) {
			return {
				x: '20%',
				y: '50%',
				width: '10%',
				height: '10%'
			}
		}
		else {
			return {
				x: '70%',
				y: '40%',
				width: '10%',
				height: '10%'
			}
		}
	}, [])

	useEffect(() => {
		let _img: HTMLImageElement
		_img = document.createElement('img')
		_img.src = srcRef.current
		_img.onload = () => {
			setImg(_img)
		}
		_img.onerror = console.log
	}, [])

	function handleClickBox() {
		if (srcRef.current === srcPage3) return

		const to = '/pnid' + (srcRef.current === srcPage1 ? srcPage2 : srcPage3);
		history.push(to)
	}

	return (

		<TransformWrapper wheel={{ step: 200 }} options={{ limitToBounds: false, minScale: 0.5, maxScale: 10 }}  >
			<TransformComponent >
				<div className='image-wrapper'>
					<Stage
						className={`image ${!!img ? 'loaded' : 'pending'}`}
						width={3308}
						height={2339}>

						<Layer>
							<Image image={img} />
						</Layer>

					</Stage>

					{!!img && (
						<BoundingBox
							x={boxBounds.x}
							y={boxBounds.y}
							width={boxBounds.width}
							height={boxBounds.height}
							onClick={handleClickBox}
						/>
					)}

				</div>
			</TransformComponent>
		</TransformWrapper>
	)
}

export default Page;