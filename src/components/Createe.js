import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  // const [title, setTitle] = React.useState("");
  // const [description, setDescription] = React.useState("");
  const [todo, setTodo] = React.useState({
    title: "",
    description: "",
  });

  const header = { Accept: "application/json" };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://64364cf38205915d34f00d71.mockapi.io/crud`, {
        // title: title,
        // description: description,
        title: todo.title,
        description: todo.description,
        header,
      })
      .then(() => {
        navigate("/view");
      });
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setTodo((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  

  return (
    <div>
      <h1>Create</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
            {/* {title} */}
          </label>
          <input
            // value={title}
            name="title"
            value={todo.title}
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
            {/* {description} */}
          </label>
          <input
            name="description"
            value={todo.description}
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            onChange={handleChange}
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
