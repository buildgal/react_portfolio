import "./index.css";
import {Card} from "react-bootstrap";

function AboutMe(){
    return(
        <div>
                <Card className="cards">
                <Card.Title>
                Background
                </Card.Title>
                <Card.Body>
                I have 4 years of experience in the financial services industry. Today, I work as a full time Engineer Analyst on an agile team for the underwriting department. I recently learned that I really like to code and decided to get formal training to sharpen my skills. Currently, I am enrolled at the University of Minnesota Coding Bootcamp to become a full stack engineer. I grew up in Houston, TX and moved to Minnesota back in 2012. Today, I live in the middle between Saint Paul and Minneapolis.
                </Card.Body>
            </Card>

            <Card className="cards">
                <Card.Title>
                University of Minnesota Coding BootCamp
                </Card.Title>
                <Card.Body>
                I discovered that I have a knack for coding. I have a strong focus in JavaScript.Check out my GitHub for all my upcoming projects.This is my first attempt at a portfolio.Future Projects: Creating a website for furniture startup.
                </Card.Body>
            </Card>

            <Card className="cards">
                <Card.Title>
                College of Saint Benedict and Saint John's University
                </Card.Title>
                <Card.Body>
                    Major: Economics
                    Economic Teaching Assistant & Student Researcher
                    Economics is fascinating because it studies human behavior from a collective. I focused on labor economics looking at how jobs changed over time with a focus on hiring policies by different companies.
                    
                </Card.Body>
            </Card>

            <Card className="cards">
                <Card.Title>
                Collége International de Cannes, France
                </Card.Title>
                <Card.Body>
                Study abroad: August 2014-December 2014
                After my semester in France I learned I can kind of read French because I know Spanish. I have a Spanish accent in French and not an English accent. I cannot write French to save my life, but it is ok. I can Google.
                    
                </Card.Body>
            </Card>

        </div>
    );
}
export default AboutMe;