import React from 'react'

class Comp1 extends React.Component{

    render(){
        console.log(this.props);
        alert(this.props.name);

        const {name, age}=this.props;

        return(
            <div className="comp1">
                <div>Name: John Wick</div>
                <div>Age: 30</div>                
                <br/>
                <div>New Name: { this.props.name }</div>
                <div>New Age: { this.props.age }</div> 
                <br/>
                <div>Const Name: { name }</div>
                <div>Const Age: { age }</div>
            </div>
        );
    }
}

export default Comp1;