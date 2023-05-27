import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

const Login: React.FC<IProps> = (props) => {
  const { setIsLogin } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {}, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userName, password);
    /* setIsLogin && setIsLogin(true); */
    if (userName === "admin" && password === "123456") {
      console.log(1);
      setIsLogin(true);
      alert("Login success !!!");
    } else {
      console.log(0);
      alert("Login fail !!!");
    }
  };

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div className={styles.container}>
      <form className="row g-3 w-50 m-auto my-4" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label text-white">UserName</label>
          <input
            className="form-control"
            type="text"
            defaultValue={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label text-white">Password</label>
          <input
            className="form-control"
            type="password"
            defaultValue={password}
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;