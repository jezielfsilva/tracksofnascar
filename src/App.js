import React, { Component } from 'react';
import './App.css';

import image1 from './assets/Atlanta.jpg';
import image2 from './assets/AutoClub.jpg';
import image3 from './assets/Bristol.jpg';
import image4 from './assets/Canadian.jpg';
import image5 from './assets/Charlotte.jpg';
import image6 from './assets/CharlotteRoad.jpg';
import image7 from './assets/Chicagoland.jpg';
import image8 from './assets/Darlington.jpg';
import image9 from './assets/Daytona.jpg';
import image10 from './assets/DaytonaRoad.jpg';
import image11 from './assets/Dover.jpg';
import image12 from './assets/Eldora.jpg';
import image13 from './assets/Homestead-Miami.jpg';
import image14 from './assets/Indianapolis.jpeg';
import image15 from './assets/IndianapolisRoad.jpeg';
import image16 from './assets/Iowa.jpg';
import image17 from './assets/kansas.jpg';
import image18 from './assets/Kentucky.jpg';
import image19 from './assets/Las Vegas.jpg';
import image20 from './assets/Martinsville.jpg';
import image21 from './assets/Michigan.jpg';
import image22 from './assets/Mid-Ohio.jpg';
import image23 from './assets/New Hampshire.png';
import image24 from './assets/Phoenix.jpg';
import image25 from './assets/Pocono.jpg';
import image26 from './assets/Richmond.jpeg';
import image27 from './assets/RoadAmerica.jpg';
import image28 from './assets/Sonoma.jpg';
import image29 from './assets/Talladega.jpg';
import image30 from './assets/Texas.png';
import image31 from './assets/WatkinsGlen.jpg';
import image32 from './assets/WorldWideGateway.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {
          name: "Atlanta Motor Speedway",
          location: "Hampton,GA",
          yearopen: 1960,
          length: "1.540",
          tracktype: "Intermediate",
          photo: image1
        },
        {
          name: "Auto Club Speedway",
          location: "Fontana,CA",
          yearopen: 1997,
          length: "2.000",
          tracktype: "Intermediate",
          photo: image2
        },
        {
          name: "Bristol Motor Speedway",
          location: "Bristol,TN",
          yearopen: 1961,
          length: ".533",
          tracktype: "Short Track",
          photo: image3
        },
        {
          name: "Canadian Tire Motorsport Park",
          location: "Bowmanville,ON",
          yearopen: 1961,
          length: "2.459",
          tracktype: "Road Course",
          photo: image4
        },
        {
          name: "Charlotte Motor Speedway",
          location: "Concord,NC",
          yearopen: 1960,
          length: "1.500",
          tracktype: "Intermediate",
          photo: image5
        },
        {
          name: "Charlotte Motor Speedway Road Course",
          location: "Concord,NC",
          yearopen: 2017,
          length: "2.320",
          tracktype: "Road Course",
          photo: image6
        },
        {
          name: "Chicagoland Speedway",
          location: "Joliet,IL",
          yearopen: 2001,
          length: "1.500",
          tracktype: "Intermediate",
          photo: image7
        },
        {
          name: "Darlington Raceway",
          location: "Darlington,SC",
          yearopen: 1950,
          length: "1.366",
          tracktype: "Intermediate",
          photo: image8
        },
        {
          name: "Daytona International Speedway",
          location: "Daytona Beach,FL",
          yearopen: 1958,
          length: "2.500",
          tracktype: "Superspeedway",
          photo: image9
        },
        {
          name: "Daytona International Speedway Road Course",
          location: "Daytona Beatch,FL",
          yearopen: 1959,
          length: "3.610",
          tracktype: "Road Course",
          photo: image10
        },
        {
          name: "Dover International Speedway",
          location: "Dover,DE",
          yearopen: 1969,
          length: "1.000",
          tracktype: "Intermediate",
          photo: image11
        },
        {
          name: "Eldora Speedway",
          location: "Rossburg,OH",
          yearopen: 1954,
          length: ".500",
          tracktype: "Short Track",
          photo: image12
        },
        {
          name: "Homestead-Miami Speedway",
          location: "Homestead,FL",
          yearopen: 1999,
          length: "1.500",
          tracktype: "Intermediate",
          photo: image13
        },
        {
          name: "Indianapolis Motor Speedway",
          location: "Speedway,IN",
          yearopen: 1909,
          length: "2.500",
          tracktype: "Superspeedway",
          photo: image14
        },
        {
          name: "Indianapolis Motor Speedway Road Course",
          location: "Indianapolis,IN",
          yearopen: 2000,
          length: "2.439",
          tracktype: "Road Course",
          photo: image15
        },
        {
          name: "Iowa Speedway",
          location: "Newton,IA",
          yearopen: 2006,
          length: ".875",
          tracktype: "Short Track",
          photo: image16
        },
        {
          name: "Kansas Speedway",
          location: "Kansas City,KS",
          yearopen: 2001,
          length: "1.500",
          tracktype: "Intermediate",
          photo: image17
        },
        {
          name: "Kentucky Speedway",
          location: "Sparta,KY",
          yearopen: 2000,
          length: "1.500",
          tracktype: "Intermediate",
          photo: image18
        },
        {
          name: "Las Vegas Motor Speedway",
          location: "Las Vegas,NV",
          yearopen: 1996,
          length: "1.500",
          tracktype: "Intermediate",
          photo: image19
        },
        {
          name: "Martinsville Speedway",
          location: "Martinsville,VA",
          yearopen: 1947,
          length: ".526",
          tracktype: "Short Track",
          photo: image20
        },
        {
          name: "Michigan International Speedway",
          location: "Brooklyn,MI",
          yearopen: 1968,
          length: "2.000",
          tracktype: "Intermediate",
          photo: image21
        },
        {
          name: "Mid-Ohio Sports Car Course",
          location: "Lexington,OH",
          yearopen: 1962,
          length: "2.258",
          tracktype: "Road Course",
          photo: image22
        },
        {
          name: "New Hampshire Motor Speedway",
          location: "Loudon,NH",
          yearopen: 1990,
          length: "1.058",
          tracktype: "Intermediate",
          photo: image23
        },
        {
          name: "Phoenix Raceway",
          location: "Phoenix,AZ",
          yearopen: 1964,
          length: "1.000",
          tracktype: "Intermediate",
          photo: image24
        },
        {
          name: "Pocono Raceway",
          location: "Long Pond,PA",
          yearopen: 1968,
          length: "2.500",
          tracktype: "Superspeedway",
          photo: image25
        },
        {
          name: "Richmond Raceway",
          location: "Richmond,VA",
          yearopen: 1946,
          length: ".750",
          tracktype: "Short Track",
          photo: image26
        },
        {
          name: "Road America",
          location: "Elkhart Lake,WI",
          yearopen: 1955,
          length: "4.048",
          tracktype: "Road Course",
          photo: image27
        },
        {
          name: "Sonoma Raceway",
          location: "Sonoma,CA",
          yearopen: 1968,
          length: "2.520",
          tracktype: "Road Course",
          photo: image28
        },
        {
          name: "Talladega Superspeedway",
          location: "Talladega,AL",
          yearopen: 1969,
          length: "2.660",
          tracktype: "Superspeedway",
          photo: image29
        },
        {
          name: "Texas Motor Speedway",
          location: "Fort Worth,TX",
          yearopen: 1995,
          length: "1.500",
          tracktype: "Intermediate",
          photo: image30
        },
        {
          name: "Watkins Glen International",
          location: "Watkins Glen,NY",
          yearopen: 1956,
          length: "2.450",
          tracktype: "Road Course",
          photo: image31
        },
        {
          name: "World Wilde Technology Raceway at Gateway",
          location: "Madison,IL",
          yearopen: 1967,
          length: "1.250",
          tracktype: "Intermediate",
          photo: image32
        }
        // 32 objetos no array index de 0 a 31
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>LIST OF NASCAR TRACKS</h1>
        <div className="container-tracks">
          {this.state.tracks.map((track) => (
            <div className="box-track">
              <img className="image-track" src={track.photo} />
              <h1>{track.name}</h1>
              <p>located in {track.location}</p>
              <p>founded in {track.yearopen}</p>
              <p>Total length {track.length}</p>
            </div>
          ))}
        </div>
        <p>informações retiradas daqui https://www.nascar.com/tracks</p>
      </div>
    );
  }
}

export default App;
