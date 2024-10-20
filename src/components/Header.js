import { useState } from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const loginHandler = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} width={"90px"} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
