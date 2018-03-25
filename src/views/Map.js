import React from 'react';
import TopBar from '../components/TopBar';
import MapChoropleth from 'react-d3-map-choropleth';
import Iframe from 'react-iframe'

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMap() {
        const url = 'http://www.arcgis.com/apps/Embed/index.html?webmap=e78c718dfaf4459190fea1a021e3cd56&amp;extent=-94.1777,44.7743,-92.7413,45.25&home=true&zoom=true&previewImage=false&scale=true&legendlayers=true&disable_scroll=true&theme=light';
        return (
            <div>
                <div className="embed-container">
                    <Iframe url={url}
                            width="1080px"
                            height="1080px"
                            id="OG 2016 Elections"
                            className="myClassname"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            </div>
        )
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