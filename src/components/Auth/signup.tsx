// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
import * as formik from "formik";
import * as yup from "yup";

function SignUp() {
  const { Formik } = formik;
  const [errorMessage, setErrorMessage] = useState([""]);
  const schema = yup.object().shape({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    username: yup.string().required().min(5),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    city: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Container fluid="sm" className="shadow mt-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Register New User</h2>
          <h4 className="mb-4">With clientside and serverside validation</h4>

          <Formik
            validationSchema={schema}
            onSubmit={async (data) => {
              console.log(data);
              try {
                const response = await axios.post(
                  "http://localhost:3060/api/users",
                  data
                );
                console.log(response);
                setErrorMessage([""]);
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
                <Form.Group controlId="validationFormikFisrtName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
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
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
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
                <Form.Group controlId="validationFormik05">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Link target="_blank" to={"../terms"}>
                    Terms{" "}
                  </Link>
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>
                <Button type="submit">Sign Up</Button>
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

export default SignUp;
