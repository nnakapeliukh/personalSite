import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import axios, { AxiosError } from "axios";
import * as formik from "formik";
import * as yup from "yup";

import { useSelector } from "react-redux";
import { selectUserData } from "../../features/users/userSlice";

export default function BlogpostCreate() {
  // get user data from redux
  const userData = useSelector(selectUserData);
  console.log(userData);
  // validation schema
  const schema = yup.object().shape({
    title: yup.string().required().min(5).max(100),
    description: yup.string().required().min(5).max(300),
    text: yup.string().required().min(1).max(5000),
  });

  const { Formik } = formik;

  const [errorMessage, setErrorMessage] = useState([""]);

  return (
    <Container fluid="sm" className="shadow my-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Create New Post</h2>
          <p className="alert alert-light">
            This page gets user data from redux state management, uses axios to
            fetch/post data, Formik to manage forms and yup for validation. All
            data is stored on the backend in MongoDB.
          </p>
          <Formik
            enableReinitialize={true}
            validationSchema={schema}
            initialValues={{ title: "", description: "", text: "" }}
            onSubmit={async (data) => {
              console.log(data);
              try {
                const response = await axios.post(
                  "http://localhost:3060/api/blogposts",
                  data
                );
                console.log("success", response);

                setErrorMessage([""]);
              } catch (e) {
                const error = e as AxiosError;
                const errorMessage = error.response?.data as Array<string>;
                setErrorMessage(errorMessage);
              }
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className="alert alert-primary"
              >
                <legend>Create New Post</legend>
                <Form.Group controlId="validationFormikTitle" className="my-4">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Post Title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    isInvalid={!!errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  controlId="validationFormikDescription"
                  className="my-4"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="validationFormikText"
                  className="my-4"
                >
                  <Form.Label>Text</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Post Text"
                      name="text"
                      value={values.text}
                      onChange={handleChange}
                      isInvalid={!!errors.text}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.text}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form>
            )}
          </Formik>
          <hr className="my-4" />

          {/* print error messages */}
          {Array.isArray(errorMessage)
            ? errorMessage?.map((mes) => (
                <p className="text-danger" key={mes}>
                  {mes}
                </p>
              ))
            : ""}
        </Col>
      </Row>
    </Container>
  );
}
