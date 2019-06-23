// root component
// includes --
// commit 1: nested component
// commit 2: props:  method of passing one component from parent to child
// commit 3: passing list of properties from the parent to the child component
// using the map function to iterate through the list items and print each of them

// use camel case naming convention
// avoid using underscore in the class names or file names
import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';


class App extends React.Component{

  state = {
    members : [
      { name: "Steve Rogers", age:"70", id: 1},
      { name: "Tony Stark", age:"40", id: 2},
      { name: "Bruce Banner", age:"50", id: 3}
    ]
  };

  render(){
    return (
      <div className="App">
        <h1>Welcome to React js</h1>
        <p>front end development</p>
        <Comp1  name="Steve Rogers" age="30" />
        <hr/>
        <Comp1  name="Tony Stark" age="40" />
        <hr/>
        <hr/>
        <Comp2  members={ this.state.members } />
      </div>
    );
  }

}

export default App;
