import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt from "jwt-decode";
import styled from 'styled-components';
import axios from "axios";




const HomeParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0px;
  margin-top: 40px;
  gap: 40px;
  width: 100%;
  height: 100%;
  flex: none;
  order: 2;
  flex-grow: 1;
`;

function Login() {


  const [input, setInput] = useState({
    username: '',
    password: '',
  })

 


const onSubmit = () => {
  console.log(input);
  axios.get('http://109.122.243.68:8080/api-auth/login/',input)
    .then((res) => {
      console.log(res.data);
      console.log("ok");
    })
    .catch((err) => {
      console.log(err.message);
      console.log("no");
    });
};

  return (
    <form >
    <div className="d-flex flex-column">
      <div className="mb-2">
        <label htmlFor="username" className="form-label">
          username
        </label>
        <input
          className="form-control"
          type="username"
          value={input.username}
          onChange={(e) =>
            setInput({ ...input, username: e.target.value })
          }
        />
       
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, password: e.target.value })
          }
        />
       
      </div>
    </div>
    <button
      style={{ backgroundColor: "#2c3e50", border: "none" }}
      type="button"
      className="btn btn-primary mt-4 float-start"
      onClick={onSubmit}
    >
   login
    </button>
  </form>
  );
}

export default Login