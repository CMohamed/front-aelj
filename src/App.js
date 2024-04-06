import './App.css';
import Navigator from "./components/Nav";
import Apropos from "./components/Apropos";
import Blog from "./components/Blog";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="container">
        <Router>
            <Navigator />
            <Routes>
                <Route element={<Home/>} path="/" exact ></Route>
                <Route element={<Apropos/>} path="/about" exact ></Route>
                <Route element={<Blog/>} path="/blog" exact ></Route>
            </Routes>

        </Router>

    </div>
  );
}

export default App;
