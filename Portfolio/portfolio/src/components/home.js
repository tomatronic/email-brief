import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';



class Home extends React.Component{
  render() {
      return (
        <Grid>
          <Row>
            <Col xs={12} md={6}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={6} className="introContainer">
              <div className="introCard">
                <h1>Tom Spencer</h1>
                <h2>Digital Designer</h2>
                <p className="intro">My name is Thomas Spencer, I currently work in Brighton primarily developing emails and landing pages for a range of high profile  clients. For a full overview of my skills and experiences you can find my CV here or a range of examples of my work here. Please do get in touch if you would like to discuss a project!</p>
              </div>
            </Col>
          </Row>
        </Grid>
      );
    }
};

export default Home;
