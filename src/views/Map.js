import React from 'react';
import TopBar from '../components/TopBar';
import MapChoropleth from 'react-d3-map-choropleth';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMap() {
    }

    render() {
        return (
            <div className="Map">
                <TopBar />
                <div className="container">
                    <div className="row">
                    </div>
                    <div className="row">
                        <h1>Maps</h1>
                    </div>
                    <div className="row">
                        {this.renderMap()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Map;