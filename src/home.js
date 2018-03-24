import React from 'react';
import TopBar from './components/appbar';
import splashPhoto from './splashphoto.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <TopBar />
                <h1>Welcome to the O.G. Voter Turnout App</h1>
                <img class="splashphoto" src={splashPhoto} alt="splash Photo" />
                <div className="homeWelcome">
                    <p>This application was created as part of the Hennepin County Geo:Code 2018 hackathon. Click on the Map and Reports pages to check out detailed voter information data for the state of Minnesota in the past four statewide elections since 2010.</p>
                </div>
            </div>
        )
    }
}

export default Home;