import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import PageNotFound from '@/components/Misc/PageNotFound'

const Index = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend/>}/>
                <Route path='/auth/*' element={<Auth/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}

export default Index