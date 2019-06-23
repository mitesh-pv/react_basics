// root component
// includes --
// commit 1: nested component
// commit 2: props:  method of passing one component from parent to child
// commit 3: passing list of properties from the parent to the child component
// using the map function to iterate through the list items and print each of them
// difference between class based component and UI based component
// class based component used for rendering components which possess some state
// ui based component possess those components which do not possess any state
// class based component uses classess to render the components
// ui based components makes use of functions to render the stateless components such as header, footer etc 

// use camel case naming convention
// avoid using underscore in the class names or file names

import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3'


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
        
        <h1>Passing each member</h1>
        <Comp1  name="Steve Rogers" age="30" />
        
        <hr/>
        <Comp1  name="Tony Stark" age="40" />
        
        <hr/>
        <hr/>
        
        <h1>Passing List for class based Component</h1>
        <Comp2 members={ this.state.members } />
        <hr/>
        <hr/>
        
        <h1>Passing List for UI based component</h1>
        <Comp3 members={ this.state.members } />
      </div>
    );
  }
}

export default App;
