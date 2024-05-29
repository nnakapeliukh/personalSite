import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// // import axios, { AxiosError } from "axios";
// import * as formik from "formik";
// import * as yup from "yup";

import { useSelector } from "react-redux";
import { selectUserData } from "../../features/users/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BlogMain() {
  // get user data from redux
  const userData = useSelector(selectUserData);
  console.log(userData);
  // validation schema

  return (
    <Container fluid="sm" className="shadow my-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Posts</h2>
          <Link className="btn btn-info my-4" to={"create"}>
            Create New Post{" "}
          </Link>
          <Button onClick={async ()=>{
            const resp = await axios.post(
              "http://localhost:3060/api/blog/create"              
            );
            console.log(resp);
          }}>Create generic post</Button>
          
          <Button onClick={async ()=>{
            const resp = await axios.get(
              "http://localhost:3060/api/blog"              
            );
            console.log(resp);
          }}>Get</Button>
          <p className="alert alert-light">
            The purpose of the blog is to have a reminder and a quick reference
            on some of the things that I work on.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
