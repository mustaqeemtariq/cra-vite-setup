import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from 'routing'

import 'styles/main.css'

const container = document.getElementById('root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<Routing />
		</StrictMode>
	)
}
