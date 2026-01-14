import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import Accounts from './pages/Accounts'
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'
import Transfer from './pages/Transfer'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}