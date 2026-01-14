import { Link } from 'react-router-dom'
export default function Navbar(){
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Newzen Bank</Link>
        <div>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><Link className='nav-link' to='/create'>Create</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/accounts'>Accounts</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/deposit'>Deposit</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/withdraw'>Withdraw</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/transfer'>Transfer</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}