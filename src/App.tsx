import './App.scss'
import Page from 'src/components/Page'
import { useState } from 'react'
import { useIsValidClickRef } from 'src/hooks'

const App = () => {

	const [ isShowBoxChecked, setIsShowBoxChecked ] = useState(false)
	const isValidClickRef = useIsValidClickRef()
	const [ highlightCount, setHighlightCount ] = useState(0)

	function handleClick() {
		isValidClickRef.current && setHighlightCount(c => ++c)
	}

	return (
		<div className={`app ${isShowBoxChecked ? 'show-box' : ''}`} onClick={handleClick} >

			<div className="toolbar">

				<label className='show-box-input'>
					<span className='label'>Show Hotspots</span>
					<input type='checkbox' onChange={e => setIsShowBoxChecked(e.target.checked)} />
					<div className={`fake-input ${isShowBoxChecked ? 'checked' : ''}`} />
				</label>

				<div className='help'>
					<button>
						<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="512" height="512" rx="256" fill="white" />
							<path d="M256 0C114.833 0 0 114.833 0 256C0 397.167 114.833 512 256 512C397.167 512 512 397.167 512 256C512 114.833 397.167 0 256 0ZM245.333 426.667C227.687 426.667 213.333 412.313 213.333 394.667C213.333 377.021 227.687 362.667 245.333 362.667C262.979 362.667 277.333 377.021 277.333 394.667C277.333 412.313 262.979 426.667 245.333 426.667ZM277.333 296.542V330.667C277.333 336.563 272.562 341.334 266.666 341.334H224C218.104 341.334 213.333 336.563 213.333 330.667V277.334C213.333 253.813 232.479 234.667 256 234.667C279.521 234.667 298.667 215.521 298.667 192C298.667 168.479 279.521 149.333 256 149.333C232.479 149.333 213.333 168.479 213.333 192V202.667C213.333 208.563 208.562 213.334 202.666 213.334H160C154.104 213.334 149.333 208.563 149.333 202.667V192C149.333 133.187 197.187 85.333 256 85.333C314.813 85.333 362.667 133.188 362.667 192C362.667 243.188 326.604 286.563 277.333 296.542Z" fill="#00A1E7" />
						</svg>
					</button>

					<ul className="content">
						<li> Use mouse wheel to <b>zoom</b>. </li>
						<li> Click and drag to <b>move</b>. </li>
						<li> Click anywhere to <b>show hotspots</b>. </li>
						<li> Click a part to display the related <b>P&ID</b>. </li>
					</ul>
				</div>

			</div>

			<Page highlightCount={highlightCount} />
		</div>
	)
}

export default App