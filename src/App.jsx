import './App.scss'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";   // bootstrap js link
import { useAuth } from './context/Auth';

import Routes from "./pages/Routes"
import ScreenLoader from './components/ScreenLoader';

const App = () => {
  const {isAppLoading} = useAuth()
  return (
    <>
      {
        !isAppLoading
        ?<Routes />
        :<ScreenLoader />

      }
    </>
  )
}

export default App
