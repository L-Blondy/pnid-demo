import './App.scss'
import { useLocation } from 'react-router-dom'
import Page from 'src/components/Page'

const App = () => {

	const location = useLocation()

	return (
		<div className='app'>
			<Page key={location.pathname} />
		</div>
	)
}

export default App