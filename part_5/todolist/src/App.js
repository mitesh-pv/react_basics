import React from 'react';
import Todos from './Todos'
import AddToDo from './AddToDo'

class App extends React.Component{

  state={
    todos: [
      // {id: 1, content: 'Write the code'}, 
      // {id: 2, content: 'Play pubg'}
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

  addToDo =(todo)=>{
    todo.id=Math.random();
    const todos =[...this.state.todos, todo];
    this.setState({
      todos
    })

  }

  render(){
    return(
      <div className="App container">
          <h1 className="center blue-text"> ToDo's List</h1>
          <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
          <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
