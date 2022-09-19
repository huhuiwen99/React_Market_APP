import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile' 
import PrivateRoute from './components/PrivateRoute'
import Category from './pages/Category'
import SignIn from './pages/SignIn' 
import SignUp from './pages/SignUp' 
import ForgotPassword from './pages/ForgotPassward' 
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element={<Explore />} />
          <Route path = '/offers' element={<Offers />} />
          <Route path = '/catogory/:catogoryName' element={<Category />} />
          <Route path = '/profile' element={<PrivateRoute />}>
            <Route path = '/profile' element={<Profile/>} />
          </Route>
          <Route path = '/sign-in' element={<SignIn />} />
          <Route path = '/sign-up' element={<SignUp />} />
          <Route path = '/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
