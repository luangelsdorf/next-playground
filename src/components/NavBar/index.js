import React from 'react';
import Link from "next/link";
import ButtonIcon from "../ButtonIcon";
import {toggleSideBar} from "../../../public/js";

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container">
        <div className="d-flex align-items-center">
          <ButtonIcon toggler={true} onClick={toggleSideBar} icon="menu">MENU</ButtonIcon>
        </div>
      </div>
    </nav>
  )
}