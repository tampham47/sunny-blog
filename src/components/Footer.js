import React from "react";
import s from "./Footer.module.css";

const Navbar = class extends React.Component {
  render() {
    return (
      <footer className={s.main}>
        <div className="container">
          <p>© Copyright 2018 Goingsunny.com</p>
        </div>
      </footer>
    );
  }
};

export default Navbar;
