import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";/*  untuk navigasi secara ototmatis */
import Swal from 'sweetalert2'; /* untuk import sweetalert2 (library untuk pop up )*/
import withReactContent from 'sweetalert2-react-content';
import loginImg from "../login-img.png";

export default function Login() {  /* logika untuk user dapat login */
  const [username, setUsername] = useState(""); /* usstate sebagai penghubung variabel didalam react ke beckend*/ /* username=value, setUsername=pengganti value username */
  const [password, setPassword] = useState("");

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault(); /* berfungsi ketika tombol submit diklik = refres dinonaktifkan */
    const { data } = await axios.post('http://localhost:8080/login', {
      username,
      password,
    }) /* request body yg akan dikirim ke backend, jika berhasil login akan diberikan akses token */
    if (data) {   /* logika ketika username dan password berhasil maka muncul pop up berhasil */
      MySwal.fire({
        title: <strong>Berhasil Login!!!</strong>,
        icon: 'success',
        heightAuto: false /* untuk mematikan style ke atas */
      })
      navigate('/content'); /* jika berhasil login akan ke halaman beranda */
      localStorage.setItem('access_token', data.access_token); /* ketika berhasil login akan localStorage akan menyimpan key access_token dgn value data.access_token */
    } else {
      MySwal.fire({
        title: <strong>Gagal Login!!!</strong>,
        icon: 'success',
        heightAuto: false /* untuk mematikan style ke atas */
      })
    }
  };

  return (
    <div className="bg-red pb-5e">
      <div className="row d-flex justify-content-start align-items-center mt-sm-5">
        <div className="col-lg-5 col-10 divimg">

          <div className="pb-5 divimg2" > <img src={loginImg} class="img-fluid img-responsive " alt="" className="imgLogin" /> </div>
        </div>
        <div className="left1 col-lg-5 offset-lg-2 col-md-6 offset-md-3">
          <div className="pt-4">
            <h2 class="text-center center-block">Hanya Admin Rumah Sakit Stack Over-Thinking Yang Dapat Login</h2>
          </div>
          <div className="mt-3 mt-md-5">
            <h5 className="text-center"><span className="badge text-bg-warning text-center labelLogin">Login Admin</span></h5>
            <form className="pt-4" onSubmit={(e) => handleSubmit(e)} /* onSubmit = ketika tombol submit diklik maka  jalankan function handleSubmit */>
              <div className="d-flex pb-3 formgroup">
                <label for="username" className="labelLogin">Username</label>
                <input id="username" type="text" value={username} /* value sebagai penghubung di usestate */ className="inputLogin" onChange={(e) => setUsername(e.target.value)} /* onChange berfungsi untuk ketika user mengetik langsung terlihat/terekam */ />
              </div>
              <div className="d-flex pb-5 formgroup2">
                <label for="password" className="labelLogin" >Password</label>
                <input id="password" type="password" value={password} className="inputLogin" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="formgroup text-center">
                <button className="btn text-light rounded-pill" id="submit" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    /* <div className="page">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="formgroup">
          <label for="username">Username</label>
          <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="formgroup">
          <button className="btn btn-primary" id="submit" type="submit">SUBMIT</button>
        </div>
      </form>
    </div> */
  )
}