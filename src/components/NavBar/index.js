import React from 'react';
import ButtonIcon from "../ButtonIcon";
import {toggleSideBar} from "../../../public/js";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container">
          <div className="d-flex align-items-center">
            <ButtonIcon onClick={toggleSideBar} icon="menu">MENU</ButtonIcon>
          </div>
        </div>
      </nav>
    </header>
  )
}