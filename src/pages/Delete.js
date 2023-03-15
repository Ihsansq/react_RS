import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Delete() {
  const navigate = useNavigate();
  const { id } = useParams();

  const MySwal = withReactContent(Swal);

  async function handleConfirm(e) {
    e.preventDefault();
    await axios.delete('http://localhost:8080/content/delete/' + id, {
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    });
    MySwal.fire({
      title: <strong>Success!</strong>,
      icon: 'success',
      heightAuto: false,
    })
    navigate('/content');
  }

  function handleCancel(e) {
    e.preventDefault();
    navigate('/content');
  }

  return (
    <div className="page">
      <form className="form">
        <h1>Are You Sure ??</h1>
        <button onClick={(e) => handleConfirm(e)}>YES</button>
        <button onClick={(e) => handleCancel(e)}>NO</button>
      </form>
    </div>
  )
}
