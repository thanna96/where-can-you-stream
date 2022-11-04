import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./features/Home/Home'))

export const Router = () => (
    <Suspense fallback={<></>}>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Suspense>
)
