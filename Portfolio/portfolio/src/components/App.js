import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import '../bootstrap.css';
import Home from './home';
import Contact from './contact';
import Labs from './labs';
import Portfolio from './portfolio';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  constructor(){
    super();
    // getInitialState
    this.state = {
      portfolioItems: {},
      labsItems: {}
    }
  }
  render() {
    return (
      <div className="mainPage">
        <div className="navBar">
        <Navbar collapseOnSelect>
          <Navbar.Brand>
            <a href='/'><h3>TOM SPENCER</h3></a>
          </Navbar.Brand>

              <Navbar.Toggle/>
              <Navbar.Collapse>
              <Nav pullRight>
              <LinkContainer exact to='/' eventKey={1}>
                <NavItem>
                  Home
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/portfolio' eventKey={3}>
                <NavItem>
                  Projects
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/contact' eventKey={4}>
                <NavItem>
                  Contact
                </NavItem>
              </LinkContainer>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
              <div className="content">
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/portfolio' component={Portfolio}/>
                    <Route path='/labs' component={Labs}/>
                    <Route path='/contact' component={Contact}/>
                  </Switch>
              </div>
      </div>
    );
  }
}

export default App;
