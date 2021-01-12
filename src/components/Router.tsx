import { BrowserRouter, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import App from 'src/App'
import { useEffect, useState } from 'react'

import srcPage1 from 'src/assets/page1.jpg'
const fileName1: string = srcPage1.split('/').pop() as string

const Router: React.FC = () => {

	return (
		<BrowserRouter basename='/pnid-demo/'>
			<Switch>
				<Route path='/pnid/:fileName'>
					<App />
				</Route>
				<Redirect to={`/pnid/${fileName1}`} />
			</Switch>
		</BrowserRouter>
	)
}

export default Router