import React, { useState } from "react";
import "./App.css";
import BaseWebRouter from "./Pages/BaseWebRouter";
import Login from "./Pages/auth/login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? (
        <BaseWebRouter setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;