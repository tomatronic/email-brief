import React from 'react';
import BlockList from './blockList';

class SideNav extends React.Component{
  render(){
    return(
      <div className="leftPane">
          <div className="mainNav">
                  <ul className="optionNav">
                    <li><a href="#">Template blocks</a></li>
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Export</a></li>
                    <li><a href="#">Import</a></li>
                  </ul>
          </div>
          <div className="blocksNav">
          <ul>
          {Object.keys(this.props.block).map(key => <BlockList key={key} details={this.props.block[key]} />)}
            </ul>
          </div>
        </div>
    )
  }
}

export default SideNav;
