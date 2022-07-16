
import Nav from './components/Nav';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';
import Books from './pages/Books';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { books } from "./data.js"
import BookInfo from './pages/BookInfo';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route exact path="/"  element={<Home />}/>
      <Route exact path="/books" element={<Books books={books}/>} />
      <Route exact path='/books/1' element={<BookInfo books={books} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
