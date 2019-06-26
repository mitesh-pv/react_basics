import React, {Component} from 'react';

class AddMember extends Component{
    state={
        name: null,
        age: null,
        id: null
    };

    handleChange =(event)=>{
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        // console.log(this.state);
        this.props.addMember(this.state);
    }
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"  onChange={this.handleChange} /><br/>
                <label htmlFor="age">Age: </label>
                <input type="text" id="age"  onChange={this.handleChange} /><br/>
                <label htmlFor="id">id: </label>
                <input type="number" id="id"  onChange={this.handleChange} /><br/>
                <button>Submit</button>
            </form>
        );
    }
}

export default AddMember;