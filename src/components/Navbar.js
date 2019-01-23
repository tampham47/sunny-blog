import React from "react";

import siteConfig from "../utils/siteConfig";
import logo from "../img/octopus.png";
import s from "./Navbar.module.css";

const Navbar = class extends React.Component {
  render() {
    return (
      <header className={s.main}>
        <div className="container">
          <div className={s.body}>
            <div className={s.left}>
              <a href={siteConfig.siteUrl} className={s.link}>
                <img src={logo} alt="octopus" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Navbar;
