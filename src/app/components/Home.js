import React from 'react';

export class Home extends React.Component{
  render(){
    return(
      <div>
        <p>In a new Component</p>
        <p>Your name is {this.props.user}</p>
      </div>
    );
  }
}
