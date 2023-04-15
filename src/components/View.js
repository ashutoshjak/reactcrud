import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(`https://64364cf38205915d34f00d71.mockapi.io/crud`)
      .then((response) => {
        //  console.log(response.data);
        setData(response.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://64364cf38205915d34f00d71.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const UpdateUser = (id) => {
    navigate(`/update/${id}`);
  };

  //  getData();
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>View</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        {data && data.length > 0 ? (
          data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr key={eachData.id}>
                    <td>{eachData.title}</td>
                    <td>{eachData.description}</td>
                    <td>
                      {/* <Link to="/update"> */}
                      <button onClick={() => UpdateUser(eachData.id)}>
                        Edit
                      </button>
                      {/* </Link> */}
                      <span style={{ paddingLeft: "20px" }}></span>
                      <button onClick={() => handleDelete(eachData.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })
        ) : (
          <span style={{ marginLeft: "auto", marginRight: "auto" }}>
            No data
          </span>
        )}
      </table>
    </div>
  );
};

export default View;
