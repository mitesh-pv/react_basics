import React from 'react'

const Comp4 =({members})=>{

    const membersList = members.map(eachMember=>{ 
        if (eachMember.age<=50){
            return (
                <div className="Comp4-class" key={ eachMember.id }>
                    <p>Name: { eachMember.name }</p>
                    <p>Age: { eachMember.age }</p>
                    <p>id: { eachMember.id }</p>
                </div>
            );
        }else{
            return null;
        }
    });
    return(
        <div className="component-4">
            {membersList}
        </div>
    )
}

export default Comp4;