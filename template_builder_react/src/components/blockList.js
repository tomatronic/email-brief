import React from 'react';

class blockList extends React.Component {
  render(){
    const { details } = this.props;
    return(
          <li className="blockStyle">
            <img src={details.image} alt="block" />
          </li>
    )
  }
}

export default blockList;
