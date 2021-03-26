import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Projects from "./components/Jumbo/index.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import Contact from "./pages/Contact.js";
import AboutMe from "./pages/about.js";
import Projects from "./pages/projects.js";
import Home from "./pages/home.js";




function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Header>
      <Route exact path={["/","/Home"]} component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Projects" component={Projects} />
      </Header>
      </Switch>
      </Router>


      <Footer>
      </Footer>
  
    </div>
  );
}

export default App;
