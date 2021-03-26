import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Projects from "./components/Jumbo/index.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import Contact from "./pages/Contact";
import AboutMe from "./pages/about";
import Projects from "./pages/projects";
import Home from "./pages/home";




function App() {
  return (
    <div className="App">
      <Router>
      <Header>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/Home"} component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Projects" component={Projects} />
      </Header>
      </Router>


      <Footer>
      </Footer>
  
    </div>
  );
}

export default App;
