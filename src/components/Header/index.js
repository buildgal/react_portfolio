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
    <Link to="/AboutMe">ABOUT ME</Link>
    <Nav.Link href="/Home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="Projects">Projects</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="AboutMe">About Me</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="Contact">Contact</Nav.Link>
  </Nav.Item>

</Nav>
{props.children}
    </div>
 );
}

export default Header;