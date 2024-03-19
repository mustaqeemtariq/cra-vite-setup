import { Home } from 'pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routing
