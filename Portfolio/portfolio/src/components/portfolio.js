import React from 'react';
import { Grid, Col, Row, PageHeader } from 'react-bootstrap';


class Portfolio extends React.Component{
  render() {
      return (
<div>
      <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}><PageHeader>PROJECTS</PageHeader><small className="pDesc">I pride myself in a wide range of skills, from design to code. I have included a variety of examples to try and demonstrate as many skills as possible.</small></Col>
      </Row>
      </Grid>
      <Grid className="portfolioGrid">
      <Row className="show-grid">
        <Col xs={6} md={3} className="portfolioItem">
          <img src="https://unsplash.it/960/720" alt="portfolio1" className="portfolioThumb" />
          <div className="overlay">
              <h4 className="overlayText">This will be an overlay.</h4>
              <p className="portfolioTitle">Portfolio Item 1</p>
          </div>
        </Col>
        <Col xs={6} md={3} className="portfolioItem">
          <img src="https://unsplash.it/960/720/" alt="portfolio1" className="portfolioThumb" />
          <div className="overlay">
              <h4 className="overlayText">This will be an overlay.</h4>
              <p className="portfolioTitle">Portfolio Item 1</p>
          </div>
        </Col>
        <Col xs={6} md={3} className="portfolioItem">
          <img src="https://unsplash.it/960/720/" alt="portfolio1" className="portfolioThumb" />
        <div className="overlay">
            <h4 className="overlayText">This will be an overlay.</h4>
            <p className="portfolioTitle">Portfolio Item 1</p>
        </div>
        </Col>
        <Col xs={6} md={3} className="portfolioItem">
          <img src="https://unsplash.it/960/720/" alt="portfolio1" className="portfolioThumb" />
        <div className="overlay">
            <h4 className="overlayText">This will be an overlay.</h4>
            <p className="portfolioTitle">Portfolio Item 1</p>
        </div>
        </Col>
      </Row>
      <Row className="show-grid">
      <Col xs={6} md={3} className="portfolioItem">
        <img src={require('../img/projects_email.png')} alt="Email Templates" className="portfolioThumb" />
        <div className="overlay">
            <h4 className="overlayText">I have created a wide array of email templates for a variety of high profile cleints...</h4>
            <p className="portfolioTitle">Email Templates</p>
        </div>
      </Col>
        <Col xs={6} md={3} className="portfolioItem">
          <img src={require('../img/projects_email.png')} alt="Email Templates" className="portfolioThumb" />
          <div className="overlay">
              <h4 className="overlayText">I have created a wide array of email templates for a variety of high profile cleints...</h4>
              <p className="portfolioTitle">Email Templates</p>
          </div>
        </Col>
        <Col xs={6} md={3} className="portfolioItem">
          <img src={require('../img/projects_preference_centre.png')} alt="Email Templates" className="portfolioThumb" />
          <div className="overlay">
              <h4 className="overlayText">I have created a wide array of email templates for a variety of high profile cleints...</h4>
              <p className="portfolioTitle">Landing Pages</p>
          </div>
        </Col>
        <Col xs={6} md={3} className="portfolioItem">
          <img src={require('../img/projects_email.png')} alt="Email Templates" className="portfolioThumb" />
          <div className="overlay">
              <h4 className="overlayText">I have created a wide array of email templates for a variety of high profile cleints...</h4>
              <p className="portfolioTitle">Email Design and Development</p>
          </div>
        </Col>
      </Row>
    </Grid>
    </div>
      );
    }
};

export default Portfolio;
