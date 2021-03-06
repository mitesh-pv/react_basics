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
// commit 4: Comp3 is a stateless component, Comp3 function used to create a ui based component
// commit 5: Comp4 contains conditional statement which renders the component based on certain condition
// commit 6: [...this.state.members, member] this is a spread operator which refers to each of the entity of the state each at a time
// commit 7: deleting a value from state 

// use camel case naming convention
// avoid using underscore in the class names or file names

import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';
import AddMember from './AddMember'
import './memPage.css'

class App extends React.Component{

  state = {
    members : [
      { name: "Steve Rogers", age:"70", id: 1},
      { name: "Tony Stark", age:"40", id: 2},
      { name: "Bruce Banner", age:"50", id: 3}
    ]
  };

  addMember =(member)=>{
    let members=[...this.state.members, member];
    this.setState({
      members: members
    });
  }

  deleteMember =(id)=>{

    let members= this.state.members.filter( eachMember=>{
      return  eachMember.id !== id
    })

    this.setState({
      members: members
    })
  }

  componentDidMount(){
    alert("component mounted");
  }

  componentDidUpdate(prevProps, prevState){
    alert('component updated');
    alert(prevProps, prevState);
  }

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
        <hr/>
        <hr/>
        <h1>Passing List for UI based component based on condition</h1>
        <Comp4 members={ this.state.members } />
        <hr/>
        <hr/>
        <h1>Passing List for UI based component where decision is taken using cinditional operator</h1>
        <Comp5 members={ this.state.members } deleteMember={ this.deleteMember} />
        <h1>Forms to add members to the List</h1>
        <AddMember addMember={ this.addMember }/>
      </div>
    );
  }
}

export default App;