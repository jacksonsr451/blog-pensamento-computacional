import {Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage/>} />
        </Routes>
    )
}
