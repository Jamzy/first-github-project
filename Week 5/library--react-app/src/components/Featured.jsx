import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bookcover from "../assets/book-1.jpeg";
import Book from "./ui/Book";

const Featured = () => {
  return (
    <sections id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Feature <span className="purple">Books</span>
          </h2>
          <div className="books">
            <Book />
          </div>
        </div>
      </div>
    </sections>
  );
};

export default Featured;
