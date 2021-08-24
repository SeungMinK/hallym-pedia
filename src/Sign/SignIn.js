import axios from "axios";
import React, { useState } from "react";
import "./SignIn.css";

function SiginIn(props) {
  let email = "";
  let password = "";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //typing 하면 onChange 를 발생시켜 state를 바꿔주어 value를 바꾼다.
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
    email = event.currentTarget.value;
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    password = event.currentTarget.value;
  };
  const onSubmitHandler = (event) => {
    // page refresh를 막아준다
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    setUser(data);
    console.log(" Data id : " + data.email + " pw :" + data.password);

    console.log("user Data id : " + user.email + "pw :" + user.password);

    // 서버에 보내기
    let body = {
      email: Email,
      password: Password,
    };
    console.log(
      `submit 눌렷음 전송될 id : ${body.email} password : ${body.password}`
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
    // axios.post('/api/users/login', body)
    // .then(response => {

    // })
  };

  return (
    <form className="LoginBox" onSubmit={onSubmitHandler}>
      <h3>Log in</h3>

      <div className="form-group-email">
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
          name="pw"
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={Password}
          onChange={onPasswordHandler}
        />
      </div>

      <button
        type="submit"
        className="btn btn-dark btn-lg btn-block"
        onClick={() => {}}
      >
        Sign in
      </button>
    </form>
  );
}

export default SiginIn;
