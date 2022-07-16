import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const BookInfo = ({ book }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--ig" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Crack the coding interview</h2>
                <Rating rating="4.5" />
                <div className="book__seelcted--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">
                    Summary
                  </div>
                  <p className="book__summary__para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus doloribus incidunt, deserunt accusantium error reiciendis ad illo aliquid tempora.
                  </p>
                </div>
                <button className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommened Books
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
