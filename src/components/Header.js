import logo from "../../assets/logo.png";
const Header = () => {
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
          </ul>
        </div>
      </header>
    );
  };
  export default Header;