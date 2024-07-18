import React from "react";
import logo from "../assets/netflix-logo.png";
import "./Header.scss";
import user from "../assets/user.png";
import searchIcon from "../assets/search-icon.png";
const Header = () => {
  // const today = new Date();
  // const month = today.getMonth();
  // const year = today.getFullYear();
  // const date = today.getDate();
  // if (date == 1 && date == 21 && date == 31){
  //   const currentDate = month + "/" + date + "st";
  // }
  // if (date == 2){
  //   const currentDate = month + "/" + date + "nd";
  // }
  // if (date == 3){
  //   const currentDate = month + "/" + date + "rd";
  // }
  // else{
  //   const currentDate = month + "/" + date + "th";
  // }
  const currentDate = "Friday 8th July";
  return (
    <header className="header-container">
      <div className="header-container__left">
        <img className="header-container__left__logo" src={logo} alt="logo" />
        <div className="header-container__left__date">| {currentDate}</div>
      </div>
      <div className="header-container__right">
        <img
          className="header-container__right__search"
          src={searchIcon}
          alt="search"
        ></img>
        <img
          className="header-container__right__user"
          src={user}
          alt="User"
        ></img>
      </div>
    </header>
  );
};

export default Header;
