import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';
import Books from './pages/Books';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { books } from "./data.js"
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
    
  }

  useEffect(() => {
    console.log(cart);
  },  [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route exact path="/"  element={<Home />}/>
      <Route exact path="/books" element={<Books books={books}/>} />
      <Route path="/books/:id" element={<BookInfo books={books}  addToCart={addToCart}/>} />
      <Route path="/cart" element={<Cart books={books} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
