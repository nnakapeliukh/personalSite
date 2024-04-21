import { Container } from "react-bootstrap";
import React from "react-dom";
function Terms() {
  return (
    <Container className="">
      <h2>Terms and Conditions</h2>
      <p>
        {" "}
        Your email and password are hashed using{" "}
        <a href="https://github.com/kelektiv/node.bcrypt.js">bcrypt</a> and not
        stored in it&apos;s original form. I do store the first name, last name
        and the city in the database, but you did not provide your real info anyway,
        right?
      </p>
    </Container>
  );
}

export default Terms;
