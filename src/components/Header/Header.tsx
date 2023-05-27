import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

const Header: React.FC<IProps> = (props) => {
  const { setIsLogin } = props;
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            alt=""
            src="https://storage.googleapis.com/fe-production/icon_vxr_full.svg"
          ></img>
        </Link>
        <button
          type="button"
          className="btn btn-dark mx-3"
          onClick={() => {
            setIsLogin(false);
            navigate(`/`);
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;