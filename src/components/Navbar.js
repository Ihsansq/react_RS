import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const access_token = localStorage.getItem('access_token'); /* untuk get access_token dari localStorage/web browser */
  const navigate = useNavigate();

  function handleLogout(e) {
    localStorage.removeItem('access_token'); /* jika klik nav logout maka hapus access_token yg ada di localStorage */
    navigate('/'); /* lalu arahkan ke halaman beranda user */
  };

  return (
    <nav className='nav'>
      <ul className='navul'>
        <Link to="/" className='navli'>Home</Link>
        {access_token && <Link to="/content" className='navli'>Content</Link>}
        <Link to="/aboutus" className='navli'>About Us</Link>
        {!access_token && <Link to="/login" className="navli">Login</Link>} {/* kalau tdk memiliki akses token maka akan muncul nav login */}
        {access_token && <label className="navli" onClick={(e) => handleLogout(e)}>Logout</label>} {/* kalau memiliki akses token maka akan muncul nav logot dan jika diklik akan menjalankan function handleLogout */}
      </ul>
    </nav>
  )
}
