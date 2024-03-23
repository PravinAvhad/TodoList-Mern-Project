import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import Todo from './Components/Todo/Todo';
import Signin from './Components/signup/Signin';
import Signup from "./Components/signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { authActions } from './Store';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
