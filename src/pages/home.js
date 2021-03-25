import "./index.css";
import {Jumbotron} from "react-bootstrap";
import headshot from "../images/headshot.jpg";
import Resume from "../images/Jaquelin Galindo 2021.pdf";



function Home(){
    return(
        <div>

            
      <Jumbotron>
               <img src={headshot} class="img-responsive" alt="headshot of Jaquelin. She is weating a blue dress and smiling at the camera."/> 
                <p class="lead">Hi! My name is Jaquelin Galindo. I am a Software Engineer who specializes in test automation. Based from St.Paul, Minnesota.  </p>
                <p class= "leadSize"><a href={Resume} target=".blank">RESUME</a> · 
                  <a href= "https://www.linkedin.com/in/jaquelin-galindo-894905104/" target=".blank">LINKEDIN</a> · 
                  <a href="https://github.com/buildgal" target=".blank">GITHUB</a>
                    
            
                  </p>

      </Jumbotron>


        </div>
    );
}
export default Home;