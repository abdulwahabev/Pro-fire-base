import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import PageNotFound from '@/components/Misc/PageNotFound'
import ProtectRoute from '@/components/Misc/ProtectRoute'
import { useAuth } from '@/context/Auth'

const Index = () => {
    const { isAuth, isAppLoading } = useAuth()

    if (isAppLoading) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Loading</h3>
            </div>
        )
    }

    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend/>}/>
                <Route path='/auth/*' element={!isAuth ? <Auth/> : <Navigate to="/dashboard"/>}/>
                <Route path='/dashboard/*' element={<ProtectRoute Component={Dashboard}/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}

export default Index