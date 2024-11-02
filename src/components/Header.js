import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const loginHandler = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} width={"90px"} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button onClick={loginHandler} className="login-btn">
              {isLogin ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
