import React, { Component } from 'react';
import '../css/style.css';
import Header from './Header';
import Stage from './Stage';
import SideNav from './SideNav';
import blocks from '../blocks';


class App extends Component {
  constructor(){
    super();
    // this.loadBlocks = this.loadBlocks.bind(this);
    this.state = {
      currentMenu: blocks
    };
  }

  // loadBlocks(){
  //   this.setState({
  //     currentMenu: blocks
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div className="leftNav">
          <Header companyName="This is a test"/>
          <SideNav block={this.state.currentMenu} />
        </div>
          <Stage />
      </div>
    )
  }
}

export default App;
