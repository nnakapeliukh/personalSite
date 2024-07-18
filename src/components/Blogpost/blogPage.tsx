import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

interface postData {
  title: string;
  description: string;
  text: string;
  date: Date;
  userName: string;
}

export default function BlogPage() {
  const [post, setPost] = useState<postData | undefined>(undefined);

  // use react router passing data through link
  const location = useLocation();

  useEffect(() => {
    const data = location.state;
    axios
      .get(`http://localhost:3060/api/blog/${data.id}`)
      .then((res) => {
        setPost(res.data);
    console.log(res.data);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {post ? (
        <Container>
          <h1 className="my-4">{post.title}</h1>
          <p>{post.userName} on {new Date(post.date).toDateString()}</p>
          <h5 className="my-4">{post.description}</h5>
          <p className="my-4">{post.text}</p>
          
        </Container>
      ) : (
        <h2>Post does not exist</h2>
      )}
    </>
  );
}
