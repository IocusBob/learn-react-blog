import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Blog from './Blog';
import Form from './Form';


const BlogList = () =>{
    const [blogs, setBlogs] = useState([]);
    const [users, setUsers] = useState(false);
    useEffect(async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setBlogs(res.data);
        const userRes = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(userRes.data);
      }, []);

    const renderBlogs =  blogs.map(blog => {
        let user = ""
        if(users){
            user = users.filter(user => user.id === blog.userId)
            user = user[0].name
        }
        
        return <Blog key={blog.id} id={blog.id} name={blog.title} description={blog.body} author={user} date="19/04/2022" /> 
    });

    return(
        <div className='container'>
            <h1>Blog App</h1>
            <div className="d-flex justify-content-around flex-wrap">
                {blogs ? renderBlogs : 'loading...'}
            </div>
            <Form />
        </div>
    )
}
export default BlogList;