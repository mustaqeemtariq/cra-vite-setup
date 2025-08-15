import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = lazy(() => import('@/features/home'))

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<Home />
			</Suspense>
		),
	},
])

const AppRouter = () => {
	return <RouterProvider router={router} />
}

export default AppRouter
