// @flow

// Framework
import React from "react";

// Components
import { Container } from "reactstrap";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

export const Page = ({ children }) =>
  <Container fluid className="page">
    {children}
  </Container>;

export default Page;
