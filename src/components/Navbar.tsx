import { Link } from "react-router-dom";
import "./Navbar.css";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  return (
    <div className="navbar_main_div sticky top-0   ">
      <a href="/home" className="">
        <img className="nav_img" src="/logo.avif" alt="logo" />
      </a>
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

      <BurgerMenu />
    </div>
  );
};

export default Navbar;
