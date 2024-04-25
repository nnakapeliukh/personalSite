import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import axios, { AxiosError } from "axios";
import * as formik from "formik";
import * as yup from "yup";

import { useSelector } from "react-redux";
import { selectUserData } from "../../features/users/userSlice";

export default function Cabinet() {
  // get user data from redux
  const userData = useSelector(selectUserData);

  // validation schema
  const schema = yup.object().shape({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    userName: yup.string().required().min(5),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    city: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  const { Formik } = formik;

  const [errorMessage, setErrorMessage] = useState([""]);
  // edit user flag to start editing the forms
  const [editUser, setEditUser] = useState(false);

  return (
    <Container fluid="sm" className="shadow mt-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Cabinet</h2>
          
          {editUser ? (
              <Button type="button" onClick={() => setEditUser(false)}>
                Cancel Edit
              </Button>
            ) : (
              <Button type="button" onClick={() => setEditUser(true)}>
                Edit
              </Button>
            )}
          <Formik
            validationSchema={schema}
            onSubmit={async (data) => {
              console.log(data);
              try {
                const response = await axios.post(
                  "http://localhost:3060/api/users",
                  data
                );
                console.log("success", response);

                setErrorMessage([""]);
                setEditUser(true);
              } catch (e) {
                const error = e as AxiosError;
                const errorMessage = error.response?.data as Array<string>;
                setErrorMessage(errorMessage);
              }
            }}
            initialValues={userData
            }
          >
           
            
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="validationFormikFisrtName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                    readOnly={!editUser}
                    className={editUser ? "" : "form-control-plaintext"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationFormikLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                    readOnly={!editUser}
                    className={editUser ? "" : "form-control-plaintext"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.userName}
                      onChange={handleChange}
                      isInvalid={!!errors.userName}
                      readOnly={!editUser}
                      className={editUser ? "" : "form-control-plaintext"}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.userName}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationFormik05">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                    readOnly={!editUser}
                    className={editUser ? "" : "form-control-plaintext"}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Sign Up</Button>
              </Form>
            )}
          </Formik>
          <Formik
            validationSchema={schema}
            onSubmit={async (data) => {
              console.log(data);
              try {
                const response = await axios.post(
                  "http://localhost:3060/api/users",
                  data
                );
                console.log("success", response);

                setErrorMessage([""]);
                setEditUser(true);
              } catch (e) {
                const error = e as AxiosError;
                const errorMessage = error.response?.data as Array<string>;
                setErrorMessage(errorMessage);
              }
            }}
            initialValues={{
              firstName: "",
              lastName: "",
              username: "",
              email: "",
              password: "",
              city: "",
              terms: false,
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Container className="alert alert-warning">
                  <Form.Group as={Col} controlId="validationFormik03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik04">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Container>
              </Form>
            )}
          </Formik>
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
