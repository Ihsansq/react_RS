import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const access_token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  function handleLogout(e) {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <nav className='nav'>
      <ul className='navul'>
        <Link to="/" className='navli'>Home</Link>
        {access_token && <Link to="/content" className='navli'>Content</Link>}
        <Link to="/aboutus" className='navli'>About Us</Link>
        {!access_token && <Link to="/login" className="navli">Login</Link>}
        {access_token && <label className="navli" onClick={(e) => handleLogout(e)}>Logout</label>}
      </ul>
    </nav>
  )
}
