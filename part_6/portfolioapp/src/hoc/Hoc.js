import React from 'react'

const Hoc =(WrappedComponent)=>{
    const colors=['red', 'blue', 'pink', 'yellow', 'green', 'orange'];
    const randomColor=colors[Math.floor(Math.random()*5)];
    const className=randomColor+'-text';

    return(props)=>{
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Hoc