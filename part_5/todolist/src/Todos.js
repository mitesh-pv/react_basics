import React from 'react';

const Todos =({todos, deleteToDo})=>{

    const toDoList=todos.length ? (
        todos.map(todo =>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span  onClick={ ()=> { deleteToDo(todo.id)} }>{ todo.content }</span>
                </div>
            )
        })
    ):(
        <p className="center">No Items left to Complete</p>
    )

    return(
        <div className="todos collection" >
            {toDoList}
        </div>
    )
    
}

export default Todos;