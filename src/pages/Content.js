import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



export default function Content({
  title
}) {
  const [content, setContent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getContent() {
      try {
        const { data } = await axios.get('http://localhost:8080/content/data');
        setContent(data);
      } catch (error) {
        console.error(error);
      }
    }
    getContent();
  }, [])

  return (
    <div className="page">
      <button>
        <Link to="/create">Create</Link>
      </button>
      {
        !id && (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                content?.map((data, index) => (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td><img src={data.image} alt={data.image} width={200} className="img_content" /></td>
                    <td>{data.name}</td>
                    <td>
                      <button variant="primary">
                        <Link to={"/edit/" + data.id}>Edit</Link>
                      </button>
                      <button>
                        <Link to={"/delete/" + data.id}>Delete</Link>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
      {
        id && (
          <h1>Hello, welcome to {title} {id ?? null}</h1>
        )
      }
    </div>
  )
}
