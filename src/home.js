import React from 'react';
import TopBar from './components/appbar';
import splashPhoto from './splashphoto.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
            <TopBar />
                <h1>Home</h1>
                <img class="splashphoto"  src={splashPhoto} alt="splash Photo" />
            </div>
        )
    }
}

export default Home;