import React, { Component } from 'react';
import '../css/style.css';
import Header from './Header';
import Stage from './Stage';
import SideNav from './SideNav';
import blocks from '../blocks';
import BlockList from './blockList';

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
          <SideNav currentMenu={this.state.currentMenu} />
          <ul className="subNav">
            {Object.keys(this.state.currentMenu)
            .map(key => <BlockList key={key} details={this.state.currentMenu[key]}/>)}
          </ul>
        </div>
          <Stage />
      </div>
    )
  }
}

export default App;
