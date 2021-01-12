import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import srcPage1 from 'src/assets/page1.jpg'
import App from 'src/App'
import { useEffect, useState } from 'react'

const Router: React.FC = () => {

	const [ , update ] = useState({})

	useEffect(() => {
		update({})
	}, [ window.location ])

	if (window.location.pathname === '/')
		return (
			<BrowserRouter>
				<Redirect to={'/pnid' + srcPage1} />
			</BrowserRouter>
		)

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/pnid/*'>
					<App />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Router