import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  
  const [img, setImg] = useState();

  

  function imageLoaded() {
    console.log('imageLoaded')
  }

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
     setTimeout(() => {
      setImg(image);
     }, 300);

    }
  })

  return (
    <div className="book">
      {
        img ? (
          <>
          <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt=""
            className="book__img"
            
          />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
          </>
        ) : (
          <>
          <div className="book__img--skeelton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__priece--skeleton"></div>
          </>
        )

      }
      
      
      {/* <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt=""
            className="book__img"
            onLoad={imageLoaded}
          />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} /> */}
      
    </div>
  );
};

export default Book;
