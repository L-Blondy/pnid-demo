import { Link } from 'react-router-dom';

interface Props {
	x: string,
	y: string,
	width: string,
	height: string,
	to: string
}

const BoundingBox = ({
	x,
	y,
	width,
	height,
	to,
}: Props) => {

	const style = {
		top: y,
		left: x,
		width,
		height
	}

	return (
		<Link className='bounding_box' style={style} to={to} ></ Link>
	)
}

export default BoundingBox;