import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

// // import axios, { AxiosError } from "axios";
// import * as formik from "formik";
// import * as yup from "yup";

import { useSelector } from "react-redux";
import { selectUserData } from "../../features/users/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";

interface postPreview {
  title: string;
  description: string;
  post_date: Date;
  tags: Array<string>;
  user_name: string;
  id: string;
}

export default function BlogMain() {
  const [posts, setPosts] = useState<Array<postPreview> | undefined>(undefined);
  // get user data if logged in
  const userData = useSelector(selectUserData);
  useEffect(() => {
    axios
      .get("http://localhost:3060/api/blog")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container fluid="sm" className="shadow my-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Posts</h2>
          {userData.userName ? (
            <>
              <Link className="btn btn-info my-4" to={"create"}>
                Create New Post{" "}
              </Link>
            </>
          ) : null}

          <p className="alert alert-light">
            The purpose of the blog is to have a reminder and a quick reference
            on some of the things that I worked on.
          </p>
          {posts?.map((post, index) => {
            return (
              <Container
                key={"postContainer" + index}
                className="bg-light rounded my-3"
              >
                <Link
                  className="link-dark link-underline link-underline-opacity-0 
                  link-underline-opacity-75-hover"
                  to="post"
                  state={post.id}
                >
                  <h3 key={post.title + index}>{post.title}</h3>
                </Link>
                <p key={"postDesckey" + index}>{post.description}</p>
                <>
                  <p className="m-0 text-end">{post.user_name}</p>
                  <p className="m-0 text-end">
                    {new Date(post.post_date).toDateString()}
                  </p>
                </>
              </Container>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
