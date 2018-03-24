import React from 'react';
import TopBar from './components/appbar';

class Map extends React.Component {
    render() {
        return (
            <div className="Map">
                <TopBar />
                <h1>Maps</h1>
            </div>
        )
    }
}

export default Map;