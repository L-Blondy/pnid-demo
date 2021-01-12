import React from 'react';

interface Props {
	x: string,
	y: string,
	width: string,
	height: string,
	onClick: () => void
}

const BoundingBox = ({
	x,
	y,
	width,
	height,
	onClick
}: Props) => {

	const style = {
		top: y,
		left: x,
		width,
		height
	}

	return (
		<div className='bounding_box' style={style} onClick={onClick} ></ div>
	)
}

export default BoundingBox;