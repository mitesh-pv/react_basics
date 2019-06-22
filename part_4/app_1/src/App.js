// root component
// includes --
// nested component
// props:  method of passing one component from parent to child

// use camel case naming convention
// avoid using underscore in the class names or file names
import React from 'react';
import Comp1 from './Comp1'


function App() {
  return (
    <div className="App">
      <h1>Welcome to React js</h1>
      <p>front end development</p>
      <Comp1  name="Steve Rogers" age="30" />
      <hr/>
      <Comp1  name="Tony Stark" age="40" />
    </div>
  );
}

export default App;
