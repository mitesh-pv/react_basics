import React, {Component} from 'react'


class AddToDo extends Component {

    state={
        content: ''
    }

    handleChange =(event)=>{
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        this.props.addToDo(this.state)
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="">Add a new Todo </label>
                    <input type="text" onChange={ this.handleChange } />
                </form>
            </div>
        )
    }
}

export default AddToDo