import React from "react";
import { render } from "react-dom";

import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends React.Component {
  render() {
    var user = {
      name: "John Doe",
      age: 25,
      hobbies: ["Eating", "Sleeping"],
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-offset-1">
          {/*You cannot render object in React, pass the object with keys to access its value*/}
            <Home user={user.name}/>
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}


render(<App/>,document.getElementById('app'));
