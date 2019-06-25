import React from 'react'

const Comp5 =({members, deleteMember})=>{

    return (
        <div className="comp5">
            {
                members.map(eachMember=>{
                    return (eachMember.age>49)? (
                        <div className="comp5-class" key={ eachMember.id }>
                            <p>Name: { eachMember.name}</p>
                            <p>Age: { eachMember.age}</p>
                            <p>ID: { eachMember.id}</p>
                            <button onClick={ ()=> {deleteMember(eachMember.id)} }>Delete</button>
                        </div>
                    ): null
                })
            }
        </div>
    );
}
        
export default Comp5;

