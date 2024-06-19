import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/home'

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
