import { Navigate } from "react-router-dom" /* untuk menendang user kehalaman lain */

export default function ProtectedRoute({
  children, /* props children untuk mengembalikan anak anak component dibawah component yg ada*/
}) {
  if (localStorage.getItem('access_token')) { /* jika memiliki access_token maka return children */
    return children
  } else {
    return <Navigate to="/" /> /* jika blm login akan ditendang kehalaman beranda user */
  }
}