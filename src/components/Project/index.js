import {Card} from "react-bootstrap";

import "./index.css";

function Project(){
 return(
     <div className="card">
<Card className="cardInfo">
  <Card.Body>
    <Card.Title>Weather Dashboard</Card.Title>
     <Card.Text>
    In this Weather Dashboard I am making various API calls and using JavaScript and jQuery to format the data. The user is asked to input a name for a city and then the current forcast is displayed. Then a 5 day forcast is produced. This repository leverages Bootstrap, Moment, and Font Awesome.
    </Card.Text>
    <Card.Link href="https://github.com/buildgal/WeatherDashboard">GitHub</Card.Link>
    <Card.Link href="https://buildgal.github.io/WeatherDashboard/">Deployed Application</Card.Link>
  </Card.Body>
</Card>

<Card className="cardInfo">
  <Card.Body>
    <Card.Title>Pochidoeggu</Card.Title>
    <Card.Text>
    Real pets are a hastle with our application you are able to care for a virtual pet from the comfort of your computer. You can choose from a dog, cat, or rabbit. All you have to do is create an account, select your pet, and tend to your pet's needs.
    </Card.Text>
    <Card.Link href="https://github.com/vfavorito/Pochidoeggu">GitHub</Card.Link>
    <Card.Link href="https://pochidoeggu.herokuapp.com/">Deployed Application</Card.Link>
  </Card.Body>
</Card>

<Card className="cardInfo">
  <Card.Body>
    <Card.Title>Web Scheduler</Card.Title>
    <Card.Text>
    This application is a work day scheduler. Using HTML, CSS, jQuery, and Bootstrap. The scheduler is dynamic and uses the current date.
    </Card.Text>
    <Card.Link href="https://github.com/buildgal/WebScheduler">GitHub</Card.Link>
    <Card.Link href="https://buildgal.github.io/WebScheduler/">Live Link</Card.Link>
  </Card.Body>
</Card>

<Card className="cardInfo">
  <Card.Body>
    <Card.Title>Read Me Generator</Card.Title>
    <Card.Text>
    This application generates a read me through the command line. This application saves time when setting up a repository.
    </Card.Text>
    <Card.Link href="https://github.com/buildgal/ReadMeGeneratpr">GitHub</Card.Link>
  </Card.Body>
</Card>

<Card className="cardInfo">
  <Card.Body>
    <Card.Title>Note Taker Application</Card.Title>
    <Card.Text>
    In this application I demonstrate my use of API, express, and Heroku. This application the user is inputs data on the UI. The data is then saved to files in the application. The user is then able to review previous files.
    </Card.Text>
    <Card.Link href="https://github.com/buildgal/NoteTaker">GitHub</Card.Link>
    <Card.Link href="https://gentle-brook-98812.herokuapp.com/">Deployed Application</Card.Link>
  </Card.Body>
</Card>

<Card className="cardInfo">
  <Card.Body>
    <Card.Title>Buying Banksy</Card.Title>
    <Card.Text>
    Brining art to the masses. Our application will allow you to shop for beautiful pieces of art from around the world without leaving the comfort of your home.
    </Card.Text>
    <Card.Link href="https://github.com/BeresIvan/BuyingBanksy">GitHub</Card.Link>
    <Card.Link href="https://buying-banksy.herokuapp.com/">Deployed Application</Card.Link>
  </Card.Body>
</Card>


    </div>
 );
}

export default Project;