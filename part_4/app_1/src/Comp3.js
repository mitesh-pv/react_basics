import React from 'react'

// const Comp3 =(props)=>{
const Comp3 =({members})=>{
    
    // const membersList  = props.members.map( eachMember => {
    const membersList = members.map( eachMember=>{
            return(
                <div className="membersList" key= { eachMember.id }>
                    <h1>List items</h1>
                    <p>Name: { eachMember.name }</p>
                    <p>Age: { eachMember.age }</p>
                    <p>ID: { eachMember.id }</p>
                    
                </div>
            );
    });
    
    return(
        <div className="component-2">
            { membersList }
        </div>
    );
}

export default Comp3