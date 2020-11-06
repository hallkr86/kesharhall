import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    
    <div className="App">
     
      <Router>
      <Navbar />
      {/* <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/portfolio">Portfolio</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div> */}
      
      <Switch>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
  
}

export default App;
