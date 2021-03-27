import {Nav} from "react-bootstrap";
import "./index.css";
import {Link} from "react-router-dom";

function Header(props){
 return(
    <div className="header">
        <Nav
  activeKey="Home"
  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>
      <Link to="Projects">Projects</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >
      <Link to="/AboutMe">About Me</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>
      <Link to= "/Contact">Contact</Link></Nav.Link>
  </Nav.Item>

</Nav>
{props.children}
    </div>
 );
}

export default Header;