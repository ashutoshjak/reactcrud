import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const header = { Accept: "application/json" };

  useEffect(() => {
    axios
      .get(`https://64364cf38205915d34f00d71.mockapi.io/crud/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://64364cf38205915d34f00d71.mockapi.io/crud/${id}`, {
        title: title,
        description: description,
        header,
      })
      .then(() => {
        navigate("/view");
      });
  };

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
