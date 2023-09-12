import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-black">
          <h2 className="header-title text-capitalize fs-23 fw-7">
            Which book are you looking for?
          </h2>
          <br />
          <p className="header-text fs-20 fw-5">
            Explore a World of Books: Your Gateway to Endless Literary
            Adventures.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
