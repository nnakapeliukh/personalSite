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
  console.log(userData);
  // validation schema
  const schema = yup.object().shape({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    userName: yup.string().required().min(5),
    city: yup.string().required(),
  });

  const { Formik } = formik;

  const [errorMessage, setErrorMessage] = useState([""]);
  // edit user flag to start editing the forms
  const [editUser, setEditUser] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPwd, setEditPwd] = useState(false);

  return (
    <Container fluid="sm" className="shadow my-5 p-4 s">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Cabinet</h2>
          <p className="alert alert-light">
            This page gets user data from redux state management, uses axios to
            fetch/post data, Formik to manage forms and yup for validation. All
            data is stored on the backend in MongoDB.
          </p>
          <Formik
            enableReinitialize={true}
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
              userName: userData.userName,
              firstName: userData.firstName,
              lastName: userData.lastName,
              city: userData.city,
            }}
          >
            {({ handleSubmit, handleChange, values, errors, resetForm }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className="alert alert-primary"
              >
                <legend>User Data</legend>
                <Form.Group
                  controlId="validationFormikFisrtName"
                  className="my-4"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                    readOnly={!editUser}
                    disabled={!editUser}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  controlId="validationFormikLastName"
                  className="my-4"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                    readOnly={!editUser}
                    disabled={!editUser}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="validationFormikUsername"
                  className="my-4"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                      isInvalid={!!errors.userName}
                      disabled={!editUser}
                      readOnly={!editUser}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.userName}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationFormik05" className="my-4">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                    readOnly={!editUser}
                    disabled={!editUser}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="userEditButtons" className="mt-4">
                  {editUser ? (
                    <>
                      <Button
                        type="button"
                        onClick={() => {
                          setEditUser(false);
                          resetForm();
                        }}
                      >
                        Cancel Edit
                      </Button>
                      <Button className="mx-4" type="submit">
                        Apply Changes
                      </Button>
                    </>
                  ) : (
                    <Button type="button" onClick={() => setEditUser(true)}>
                      Edit
                    </Button>
                  )}
                </Form.Group>
              </Form>
            )}
          </Formik>
          <hr className="my-4"/>

          {/* Email Form */}
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
              email: "",
              newEmail: "",
              repeatEmail: "",
            }}
          >
            {({ handleSubmit, handleChange, values, errors, resetForm }) => (
              <Form noValidate onSubmit={handleSubmit} className="alert alert-warning">
                <legend>User Email</legend>
                  <Form.Group as={Col} controlId="emailFormValidate">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="*****@*******"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      readOnly={!editEmail}
                      disabled={!editEmail}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {editEmail ? (
                    <>
                      <p>Enter your old email</p>
                      <Form.Group controlId="validateNewEmail">
                        <Form.Label>New Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="New Email"
                          name="newEmail"
                          value={values.newEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.repeatEmail}
                        </Form.Control.Feedback>
                      </Form.Group>{" "}
                      <Form.Group controlId="validateRepeatEmail">
                        <Form.Label>Repeat New Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Repeat New Email"
                          name="repeatEmail"
                          value={values.repeatEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.repeatEmail}
                        </Form.Control.Feedback>
                      </Form.Group>{" "}
                    </>
                  ) : (
                    ""
                  )}

                  {/* Email edit buttons */}
                  <Form.Group controlId="emailEditButtons" className="mt-4">
                    {editEmail ? (
                      <>
                        <p>
                          Your email is stored as an encrypted value, I do not
                          have access to it.
                        </p>
                        <Button
                          type="button"
                          onClick={() => {
                            setEditEmail(false);
                            resetForm();
                          }}
                        >
                          Cancel Edit
                        </Button>
                        <Button className="mx-4" type="submit">
                          Change Email
                        </Button>
                      </>
                    ) : (
                      <Button type="button" onClick={() => setEditEmail(true)}>
                        Edit
                      </Button>
                    )}
                  </Form.Group>
              </Form>
            )}
          </Formik>
          <hr className="my-4"/>

          {/* Password Form */}
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
              oldPwd: "",
              newPwd: "",
              repeatNewPwd: "",
            }}
          >
            {({ handleSubmit, handleChange, values, errors, resetForm }) => (
              <Form noValidate onSubmit={handleSubmit} className="alert alert-warning">
                <legend>User Password</legend>
                  <Form.Group as={Col} controlId="validationOldPassword">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      name="oldPwd"
                      value={values.oldPwd}
                      onChange={handleChange}
                      isInvalid={!!errors.oldPwd}
                      readOnly={!editPwd}
                      disabled={!editPwd}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.oldPwd}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {editPwd ? (
                    <>
                      <Form.Group controlId="validationNewPwd">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="New Password"
                          name="newPwd"
                          value={values.newPwd}
                          onChange={handleChange}
                          isInvalid={!!errors.newPwd}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.newPwd}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="validationRepeatNewPwd">
                        <Form.Label>Repeat New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Repeat New Password"
                          name="repeatNewPwd"
                          value={values.repeatNewPwd}
                          onChange={handleChange}
                          isInvalid={!!errors.repeatNewPwd}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.repeatNewPwd}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </>
                  ) : (
                    ""
                  )}
                  {/* Password edit buttons */}
                  <Form.Group controlId="pwdEditButtons" className="mt-4">
                    {editPwd ? (
                      <>
                        <p>
                          Your password is stored as an encrypted value, I do
                          not have access to it.
                        </p>
                        <Button
                          type="button"
                          onClick={() => {
                            setEditPwd(false);
                            resetForm();
                          }}
                        >
                          Cancel Edit
                        </Button>
                        <Button className="mx-4" type="submit">
                          Change Password
                        </Button>
                      </>
                    ) : (
                      <Button type="button" onClick={() => setEditPwd(true)}>
                        Edit
                      </Button>
                    )}
                  </Form.Group>
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
