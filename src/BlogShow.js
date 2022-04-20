import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const BlogShow = () => {
  const [blog, setBlog] = useState([]);
  let {id} = useParams()
  useEffect(async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setBlog(res.data);
  }, []);

  if (!blog){
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <h4>Author</h4>
      <p>Mr Newman</p>
      <h4>Email</h4>
      <p>rnewman@felpham.org.uk</p>
      <h4>Company</h4>
      <p>Felpham Community College</p>
      <h4>Website</h4>
      <p>www.felpham.org</p>
    </div>
  )
}

export default BlogShow