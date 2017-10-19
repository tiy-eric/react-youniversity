import React, { Component } from 'react';
import './Home.css';

import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div>   
            <Carousel id="carousel-college">

                {/* <Carousel.Item>
                    
                    <img src="/assets/images/1_halls.jpg" alt="school halls"/>
                    
                    <Carousel.Caption className="caption">
                        <h2>Welcome to</h2>
                        <h1>YOUniversity</h1>
                        <h2><i>Your Academic Adventure Starts Here</i></h2>
                    </Carousel.Caption>

                </Carousel.Item> */}


                <Carousel.Item>
                    
                    <img src="/assets/images/2_graduates.jpg" alt="graduates"/>
                    
                    <Carousel.Caption className="caption">
                        <div className="intro">
                            <h2 className = "welcome">Welcome to</h2>
                            <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                            <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                        </div>
                    </Carousel.Caption>
                
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src="/assets/images/3_path.jpg" alt="school view"/>
                    <Carousel.Caption className="caption">
                        <div className="intro">
                            <h2 className = "welcome">Welcome to</h2>
                            <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                            <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/assets/images/5_school.jpg" alt="school"/>
                    <Carousel.Caption className="caption">
                        <div className="intro">
                            <h2 className = "welcome">Welcome to</h2>
                            <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                            <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        <div id="marketing" className="container text-center">
            <Grid>
                <Row className="show-grid">
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/images/apple.png" alt="Generic placeholder" width="140" height="140" />
                        <h2>Financial Aid</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                    </Col>
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/images/maps.jpg" alt="Generic placeholder" width="140" height="140" />
                        <h2>Top Campuses</h2>
                        {/* https://www.bestcollegereviews.org/features/most-beautiful-college-campuses/ */}
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                    </Col>
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/images/studying.png" alt="Generic placeholder" width="140" height="140" />
                        <h2>Early Admissions</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                      {/* https://www.usnews.com/education/best-colleges/slideshows/10-things-to-know-about-college-early-admissions-programs */}
                        <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                   
                    </Col>
                </Row>
            </Grid>

        </div> 

    </div>
     
    );
  }
}

export default Home;
