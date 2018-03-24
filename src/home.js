import React from 'react';
import TopBar from './components/appbar';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
            <TopBar />
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;