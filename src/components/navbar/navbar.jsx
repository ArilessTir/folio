import React, { useEffect } from "react";
import gsap from "gsap";
import "./navbar.css";

const Navbar = () => {
  useEffect(() => {
    gsap.from("nav", {
      opacity: 0,
      y: -150,
      duration: 0.8,
    });
  }, []);
  return (
    <nav className="nav">
      <h1 className="nav__logo">Ari.</h1>
      <ul className="nav__items ">
        {/* <a className="nav__link " href="">
          {" "}
          ABOUT{" "}
        </a>
        <a className="nav__link " href="">
          {" "}
          WORK{" "}
        </a>
        <a className="nav__link " href="">
          {" "}
          CONTACT{" "}
        </a> */}
      </ul>
    </nav>
  );
};

export default Navbar;
