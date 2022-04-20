import React from 'react';
import BlogReaction from './BlogReaction';
import { Link } from 'react-router-dom';
import './Blog.css'


 function Blog (props) {

  return (
    <div className="card" style={{width: "18rem", margin: "20px"}}>
      <Link to={`/blogs/${props.id}`} className="card-tag">
      <img src="https://www.dreamhost.com/blog/wp-content/uploads/2019/01/Blog-experts-opt-750x498.jpg" className="card-img-top" alt="for finn...."></img>
      <div className="card-body">
        {props.name.length > 20 ? (
          <h5 className="card-title">{props.name.slice(0,20)}...</h5>
        ):(
          <h5 className="card-title">{props.name}</h5>
        )}
        {props.description.length > 100 ? (
          <p className="card-text">{props.description.slice(0, 100)}...</p>
        ) : (
          <p className="card-text">{props.description}</p>
        )}
        <p>{props.author}</p>
        <p>{props.date}</p>
        <BlogReaction />
      </div>
      </Link>
    </div>
  );
}


export default Blog;