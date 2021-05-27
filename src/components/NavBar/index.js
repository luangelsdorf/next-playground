import React from 'react';
import Link from "next/link";
import ButtonIcon from "../ButtonIcon";
import {toggleSideBar} from "../../../public/js";

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link href="/">
            <a className="navbar-brand">
              <h3 className="m-0 ms-2">Home</h3>
            </a>
          </Link>
          <ButtonIcon icon="menu" />
        </div>
      </div>
    </nav>
  )
}