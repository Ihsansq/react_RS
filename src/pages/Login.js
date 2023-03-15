import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:8080/login', {
      username,
      password,
    })
    if (data) {
      MySwal.fire({
        title: <strong>Success!</strong>,
        icon: 'success',
        heightAuto: false
      })
      navigate('/content');
      localStorage.setItem('access_token', data.access_token);
    } else {
      MySwal.fire({
        title: <strong>Invalid Username or Password!</strong>,
        icon: 'error',
        heightAuto: false
      })
    }
  };

  return (
    <div className="bg-white pb-5e">
      <div className="row d-flex justify-content-start align-items-center mt-sm-5">
        <div className="col-lg-5 col-10 border border-danger">

          <div className="pb-5 border border-warning" > <img src="https://gitlab.com/stack-over-thinking/website-stack-over-thinking/-/raw/master/img/login.png" class="img-fluid img-responsive " alt="" /> </div>
        </div>
        <div className="left1 col-lg-5 offset-lg-2 col-md-6 offset-md-3 border border-danger">
          <div className="pt-4 border border-warning">
            <h2 class="text-center center-block">Hanya Admin Rumah Sakit Stack Over-Thinking Yang Dapat Login</h2>
            <h2 class="text-center center-block"></h2>
          </div>
          <div className="mt-3 mt-md-5">
            <h5 className="text-center"><span className="bg-warning text-center labelLogin">Login Admin</span></h5>
            <form className="pt-4" onSubmit={(e) => handleSubmit(e)}>
              <div className="d-flex pb-3 formgroup">
                <label for="username" className="labelLogin">Username</label>
                <input id="username" type="text" value={username} className="inputLogin" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="d-flex pb-5 formgroup2">
                <label for="password" className="labelLogin" >Password</label>
                <input id="password" type="password" value={password} className="inputLogin" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="border border-danger formgroup text-center">
                <button className="btn btn-primary rounded-pill" id="submit" type="submit">SUBMIT</button>
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