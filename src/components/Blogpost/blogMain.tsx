import React, { useEffect, useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// // import axios, { AxiosError } from "axios";
// import * as formik from "formik";
// import * as yup from "yup";

// import { useSelector } from "react-redux";
// import { selectUserData } from "../../features/users/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface postPreview {
  title: string;
  description: string;
  post_date: Date;
  tags: Array<string>;
  user_name: string;
}

export default function BlogMain() {
  const posts = useRef<Array<postPreview> | undefined>(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:3060/api/blog")
      .then((res) => {
        posts.current = res.data;
        console.log("response for get blog posts", posts.current);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  // get user data from redux
  // const userData = useSelector(selectUserData);
  // console.log("user data from redux",userData);
  // validation schema
  const navigate = useNavigate();
  return (
    <Container fluid="sm" className="shadow my-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Posts</h2>
          <Link className="btn btn-info my-4" to={"create"}>
            Create New Post{" "}
          </Link>
          <Button
            onClick={async () => {
              try {
                const resp = await axios.post(
                  "http://localhost:3060/api/blog/create"
                );
                console.log("response for 'post' post", resp);
              } catch (e) {
                navigate("/signin");
              }
            }}
          >
            Create generic post
          </Button>

          <p className="alert alert-light">
            The purpose of the blog is to have a reminder and a quick reference
            on some of the things that I worked on.
          </p>
          {posts.current?.map((post, index) => {
            return (
              <Container key={"postContainer" + index} className="bg-light rounded ">
                <h3 key={post.title+index}>{post.title}</h3>
                <p key={"postDesckey" + index}>{post.description}</p>
              </Container>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
