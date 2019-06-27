// adding router information to the props


import React from 'react'

const Contact =(props)=>{

    // console.log(props);

    // redirecting to the about page after 2 seconds
    setTimeout(()=>{
        props.history.push('/About')
    }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus placeat necessitatibus, nulla consectetur officiis in tenetur assumenda eum consequuntur eveniet voluptate perspiciatis doloribus dolorum sint ullam! Voluptas, temporibus incidunt.</p>
        </div>
    )
}

export default Contact