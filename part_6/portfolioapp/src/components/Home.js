import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Avengers from '../images/avengers.png';

class Home extends React.Component{

    state={
        posts: [

        ]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response=>{
            console.log(response)
            this.setState({
                posts: response.data.slice(0, 10)
            })
        })
    }

    render(){
        const { posts }=this.state;
        const postList= posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={Avengers} alt="Avengers Assemble"/>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                                <span className="card-title purple-text">
                                    <strong>{post.title}</strong>
                                </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="card center">
                No posts yet
            </div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home