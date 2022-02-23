import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleshadow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshadow(true);
      } else {
        handleshadow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"} `}>
      <img
        className="nav__logo"
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
      />
      <img
        className="nav__avatar"
        alt="Netflix smiley face"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
      />
    </div>
  );
};

export default Nav;
