import React from 'react';


class SideNav extends React.Component{
  render(){
    return(
      <div>
          <div className="mainNav">
                  <ul className="optionNav">
                    <li><a href="#">Template blocks</a></li>
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Export</a></li>
                    <li><a href="#">Import</a></li>
                  </ul>
          </div>
        </div>
    )
  }
}

export default SideNav;
