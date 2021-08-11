import React from "react";
import "./Navbar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

function Navbar() {
  const [showContent, setShowContent] = useState(false);

  function Toggle() {
    setShowContent(!showContent);
  }

  return (
    <div className="navbar">
      <MenuIcon className="navbar__menuIcon" onClick={Toggle} />
      <div className={showContent ? "navbar__hidden" : "hide"}>
        <h3>Learn</h3>
        <h4>My learning</h4>
        <h3>Most popular</h3>
        <h4>Web Development</h4>
        <h4>Mobile Development</h4>
        <h4>Game development</h4>
        <h4>Enterpreneurship development</h4>
        <h4>Business Analytics</h4>
        <h4>Digital Marketing</h4>
        <h4>Graphic Design</h4>
        <h4>IT Certification</h4>
        <h4>Personal Transformation</h4>
        <h3>More from Udemy</h3>
        <h4>Udemy Business</h4>
        <h4>Get the app</h4>
        <h4>Invite friends</h4>
        <h4>Help</h4>
      </div>
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt="logo"
        className="navbar__logo"
      />
      <p className="navbar__text">Categories</p>
      <input
        type="text"
        placeholder="Search for anything"
        className="navbar__input"
      />
      <p className="navbar__text navbar__ub">Udemy Business</p>
      <p className="navbar__text navbar__ins">Instructor</p>
      <p className="navbar__text">My learning</p>
      <FavoriteBorderIcon className="navbar__icon navbar__favIcon" />
      <div className="navbar__mediaSet">
        <SearchIcon className="navbar__searchIcon" />
        <ShoppingCartOutlinedIcon className="navbar__icon" />
      </div>
      <NotificationsNoneIcon className="navbar__icon navbar__notificationIcon" />
      <Avatar
        src="https://img-c.udemycdn.com/user/75x75/151055002_8c2b.jpg"
        className="navbar__icon navbar__avatar"
        style={{ height: 32, width: 32 }}
      />
    </div>
  );
}

export default Navbar;
