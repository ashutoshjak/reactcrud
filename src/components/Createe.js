import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const header = { Accept: "application/json" };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://64364cf38205915d34f00d71.mockapi.io/crud`, {
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
      <h1>Create</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title {title}
          </label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description {description}
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
