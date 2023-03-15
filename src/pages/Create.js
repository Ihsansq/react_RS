import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Create() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const [description5, setDescription5] = useState("");
  const [description6, setDescription6] = useState("");

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!Boolean(name) || !Boolean(image)) {
      MySwal.fire({
        title: <strong>Name & Image must be filled</strong>,
        icon: 'error',
        heightAuto: false
      })
    } else {
      await axios.post('http://localhost:8080/content/create', {
        name, image, description1, description2, description3, description4, description5, description6,
      }, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      MySwal.fire({
        title: <strong>Success!</strong>,
        icon: 'success',
        heightAuto: false,
      });
      navigate('/content');
    }
  }

  return (
    <div className="page">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="formgroup">
          <label for="name">Name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="image">Image</label>
          <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="description1">Description 1</label>
          <input id="description1" type="text" value={description1} onChange={(e) => setDescription1(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="description2">Description 2</label>
          <input id="description2" type="text" value={description2} onChange={(e) => setDescription2(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="description3">Description 3</label>
          <input id="description3" type="text" value={description3} onChange={(e) => setDescription3(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="description4">Description 4</label>
          <input id="description4" type="text" value={description4} onChange={(e) => setDescription4(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="description5">Description 5</label>
          <input id="description5" type="text" value={description5} onChange={(e) => setDescription5(e.target.value)} />
        </div>
        <div className="formgroup">
          <label for="description6">Description 6</label>
          <input id="description6" type="text" value={description6} onChange={(e) => setDescription6(e.target.value)} />
        </div>
        <div className="formgroup">
          <button id="submit" type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  )
}
