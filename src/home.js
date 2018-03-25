import React from 'react';
import TopBar from './components/appbar';
import splashPhoto from './splashphoto.jpg';
import logo from './opengov.png';
import womanFist from './woman-fist.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <TopBar />

                <img className="woman" src={womanFist} alt="woman fist photo" />

                <div>
                    <img className="logo" src={logo} alt="OG logo" />
                </div>
            
                <div>
                    <section className="content-section" >
                        <div className="container">
                            <div className="content-section-heading text-center">
                                
                                <h2 className="mb-5">Our Team</h2>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <a>
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Blaze Fugina</h2>
                                            
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/wind-road.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a  >
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Pam Virtucio</h2>
                                         
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/wind-road.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a  >
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Dennis Lee</h2>
                                               
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/wind-road.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a  >
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Grant Stromgren</h2>
                                              
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/wind-road.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a  >
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Kari Christianson</h2>
                                               
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/truck-road.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a >
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Chakra Sankaraiah</h2>
                                              
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/minneapolis.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a  >
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Rick Birmingham</h2>
                                              
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/containers.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a  >
                                        <span className="caption">
                                            <span className="caption-content">
                                                <h2>Nestor Gomez Jimenez</h2>
                                             
                                            </span>
                                        </span>
                                        <img className="img-fluid" src="img/containers.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;