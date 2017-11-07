import React, { Component } from 'react';
// Import routing components
import {Router, Route} from 'react-router';
import edit from './edit';
import iMport from './iMport';
import eXport from './eXport';
import blockList from './blockList';

class masterNav extends Component {
  render() {
    return (
    <Router>
      <Route component={SideNav}>
        <Route path="/blockList" component={blockList}/>
        <Route path="/edit" component={edit}/>
        <Route path="/eXport" component={eXport}/>
        <Route path="/iMport" component={iMport}/>
      </Route>
    </Router>
)
}
}

export default masterNav;
