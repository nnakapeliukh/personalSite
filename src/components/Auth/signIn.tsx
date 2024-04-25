import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import axios, { AxiosError } from "axios";
import * as formik from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUserData } from "../../features/users/userSlice";

function SignIn() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (loginSuccess) {
      setLoginSuccess(false);
      axios
        .get("http://localhost:3060/api/users/")
        .then((response) => {
          dispatch(
            setUserData({
              userName: response.data.userName,
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              city: response.data.city
            })
          );
        })
        .catch((e) => console.log(e));
    }
    if (loginSuccess) navigate("/cabinet");
  }, [loginSuccess]);

  const { Formik } = formik;
  const [errorMessage, setErrorMessage] = useState([""]);
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return (
    <Container fluid="sm" className="shadow mt-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Sign In</h2>
          <h4 className="mb-4">Token-based authentication</h4>

          <Formik
            validationSchema={schema}
            onSubmit={async (data) => {
              try {
                const response = await axios.post(
                  "http://localhost:3060/api/users/login",
                  data
                );
                axios.defaults.headers.common["Authorization"] =
                  `Bearer ${response.data.token}`;
                  localStorage.setItem("token", response.data.token)
                setErrorMessage([""]);
                setLoginSuccess(true);
              } catch (e) {
                const error = e as AxiosError;
                const errorMessage = error.response?.data as Array<string>;
                setErrorMessage(errorMessage);
              }
            }}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
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
                <Button className="mt-4" type="submit">
                  Login
                </Button>
                <Link className="nav-link mt-4 text-primary" to={"../signup"}>
                  Sign Up{" "}
                </Link>
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
export default SignIn;
