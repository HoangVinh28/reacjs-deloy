import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light mb-5">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" aria-current="page" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                aria-current="page"
                to="/trips"
              >
                Chuyến xe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                aria-current="page"
                to="/tickets"
              >
                Vé xe
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link text-dark" to="/customers">
                Khách hàng
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-dark" to="/route">
                Lộ trình
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/cars">
                Xe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/employees">
                Nhân viên
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/statistical">
                Thống kê
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;