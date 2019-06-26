import React from 'react';
import Todos from './Todos'

class App extends React.Component{

  state={
    todos: [
      {id: 1, content: 'Write the code'}, 
      {id: 2, content: 'Play pubg'}
    ]
  }

  deleteToDo =(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos
    })
  }

  render(){
    return(
      <div className="App container">
          <h1 className="center blue-text"> ToDos List</h1>
          <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;
