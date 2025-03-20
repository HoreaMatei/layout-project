import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_main_div sticky top-0   ">
      <img className="nav_img" src="/logo.avif" alt="logo" />
      <div className="navigation_buttons">
        <Link className="nav-link" to="/">
          <span data-hover="Home">Home</span>
        </Link>
        ,
        <Link className="nav-link" to="/about">
          <span data-hover="About">About</span>
        </Link>
        ,
        <Link className="nav-link" to="/works">
          <span data-hover="Works">Works</span>
        </Link>
        ,
        <Link className="nav-link" to="/contact">
          <span data-hover="Contact">Contact</span>
        </Link>
        ,
        <Link className="nav-link" to="/cart">
          <span data-hover="Cart">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
