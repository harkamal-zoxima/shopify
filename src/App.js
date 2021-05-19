import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from './components/Explore'
import About from './components/About'
import Cart from './components/Cart'
import Product from "./components/Product";
import { useState } from "react";
import Header from './components/Header'

function App() {
  const [color, setColor] = useState("#FBD1D2");
  const [link, setLinkText] = useState(null);
  
  return (
    <Router>
      <Header bg={color} setText={(text) => setLinkText(text)} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/about" component={About} />
        {/* <Route path="/cart" component={Cart} /> */}
        <Route path='/Product/:id' component={Product} />
        <Route path='/cart/:path' component={Cart} />
      </Switch>
    </Router>
  );
}


export default App;
