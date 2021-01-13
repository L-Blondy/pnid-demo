import './App.scss'
import Page from 'src/components/Page'
import { useState } from 'react'
import { useIsValidClickRef } from 'src/hooks'

const App = () => {

	const isValidClickRef = useIsValidClickRef()
	const [ highlightCount, setHighlightCount ] = useState(0)

	function handleClick() {
		isValidClickRef.current && setHighlightCount(c => ++c)
	}

	return (
		<div className='app' onClick={handleClick} >
			<Page highlightCount={highlightCount} />
		</div>
	)
}

export default App