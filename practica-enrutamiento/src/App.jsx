import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import NumberPage from "./components/pages/NumberPage";
import WordPage from "./components/pages/WordPage";
import StyleWordPage from "./components/pages/StyleWordPage";
import Navigation from "./components/Navigation";

function App(){
  return (
    <Router>
      <div>
        <Navigation />
          <Routes>
              <Route path="/home" element={ <Home/> }></Route>
              <Route path="/number/:number" element={ <NumberPage/> }></Route>
              <Route path="/word/:word" element={ <WordPage/> }></Route>
              <Route path="/hello/:text/:color/:background" element={ <StyleWordPage/> }></Route>
          </Routes>
      </div>
    </Router>
  )
}

export default App;