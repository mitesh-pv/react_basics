import React from 'react'

const Comp5 =({members})=>{

    return (
        <div className="comp5">
            {
                members.map(eachMember=>{
                    return (eachMember.age>49)? (
                        <div className="comp5-class" key={ eachMember.id }>
                            <p>Name: { eachMember.name}</p>
                            <p>Age: { eachMember.age}</p>
                            <p>ID: { eachMember.id}</p>
                        </div>
                    ): null
                })
            }
        </div>
    );
}
        
export default Comp5;

