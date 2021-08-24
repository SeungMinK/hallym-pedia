import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"; //useHistroy를 훅이라고 부름
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //typing 하면 onChange 를 발생시켜 state를 바꿔주어 value를 바꾼다.
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    // page refresh를 막아준다
    event.preventDefault();

    // 서버에 보내기
    let body = {
      name: Name,
      email: Email,
      password: Password,
    };
    console.log(
      `submit 눌렷음 전송될 name : ${body.name} id : ${body.email} password : ${body.password}`
    );
    /*
    dispatch(loginUser(body))
      // 로그인되면 /(index페이지)로 이동
      .then((response) => {
        if (response.payload.loginSuccess) {
          props.history.push("/");
        } else {
          alert("Error");
        }
      });
    */
    /*
     axios.post('/firebaseq32113;393939/user', body)
     .then(response => {

     })
     */
  };

  return (
    <>
      <form className="LoginBox" onSubmit={onSubmitHandler}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={Name}
            onChange={onNameHandler}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={Email}
            onChange={onEmailHandler}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={Password}
            onChange={onPasswordHandler}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
      </form>
    </>
  );
}

export default SignUp;
