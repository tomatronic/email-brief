import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';


class About extends React.Component{
  render() {
      return (
        <Grid>
          <Row>
            <Col xs={12} md={12} className="aboutMe">
              <Panel>
                <Grid>
                  <Row>
                  <Col xs={12} md={8}>
                    <h2>Title here</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper convallis risus et ultrices. Maecenas a massa et tellus imperdiet porttitor. Suspendisse scelerisque pretium leo ac dignissim. Quisque vel dignissim elit, at eleifend libero. Ut eget velit sed tellus vehicula facilisis in sit amet massa. Quisque vulputate, dui ornare pharetra maximus, nisi nulla bibendum ipsum, a volutpat nisi nisl vel dolor. Sed scelerisque cursus erat, lobortis iaculis sapien feugiat sed. Phasellus lobortis ornare consequat. Praesent rhoncus sagittis leo, nec elementum nisi varius finibus. Proin sit amet ornare justo.
                    </p>
                    <p>
                      Ut vel sapien velit. Maecenas eget ipsum ullamcorper, iaculis neque non, finibus sapien. Integer consectetur suscipit ante sed lacinia. Nullam venenatis malesuada libero, in blandit magna auctor ac. Vivamus fermentum sem massa, ut rutrum orci auctor eget. Donec eu efficitur sem, vitae finibus tortor. Nam elit velit, porttitor nec auctor sit amet, accumsan sed enim. Cras hendrerit dolor magna, sit amet pulvinar odio consectetur ac.
                    </p>
                  </Col>
                  <Col xs={12} md={4}>image here</Col>
                  </Row>
                </Grid>
              </Panel>
          </Col>
        </Row>
      </Grid>
      );
    }
};

export default About;
