import React from "react";
import { Container } from "react-bootstrap";

import { useSelector } from "react-redux";
import { selectFirstName } from "../../features/users/userSlice";



export default function Cabinet() {
    const selector = useSelector();
    const firstName = selector(selectFirstName);
  return (<Container className="shadow mt-5 p-4 s">
    <p>{firstName}</p>
  </Container>);
}
