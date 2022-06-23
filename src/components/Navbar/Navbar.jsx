import React from "react";
import { NavLink } from "react-router-dom";
import home from "../../assets/img/homeicon.svg";
import panjara from "../../assets/img/panjara.svg";
import ring from "../../assets/img/ring.svg";
import messagess from "../../assets/img/message.svg";
import bookmark from "../../assets/img/bookmark.svg";
import list from "../../assets/img/list.svg";
import profile from "../../assets/img/profil.svg";
import more from "../../assets/img/more.svg";
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="py-3 pt-0">
        <ul className="d-flex flex-column nav nav-pills pe-3">
          <li>
            <img className="pt-4 pb-4" src={logo} alt="" />
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/" className="nav-link text-dark" aria-current="page">
              <img className="pe-2" src={home} alt="" />
              Home
            </NavLink>
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/Explore" className="nav-link text-dark mb-3">
              <img className="pe-2" src={panjara} alt="" />
              Explore
            </NavLink>
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/Notifications" className="nav-link text-dark mb-3">
              <img className="pe-2" src={ring} alt="" />
              Notifications
            </NavLink>
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/Messages" className="nav-link text-dark mb-3">
              <img className="pe-2" src={messagess} alt="" />
              Messages
            </NavLink>
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/Bookmarks" className="nav-link text-dark mb-3">
              <img className="pe-2" src={bookmark} alt="" />
              Bookmarks
            </NavLink>
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/Lists" className="nav-link text-dark mb-3">
              <img className="pe-2" src={list} alt="" />
              Lists
            </NavLink>
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/Profile" className="nav-link text-dark mb-3">
              <img className="pe-2" src={profile} alt="" />
              Profile
            </NavLink>
          </li>
          <li className="nav-item d-flex mb-2">
            <NavLink to="/More" className="nav-link text-dark mb-3">
              <img className="pe-2" src={more} alt="" />
              More
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
