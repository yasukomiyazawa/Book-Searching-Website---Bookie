import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="conatiner">
        <div className="search-form-content">
          <div className="search-form">
            <div className="search-from-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="The Alchemist .."
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-maroon size={32}" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
