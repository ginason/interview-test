// @flow

// Framework
import React from "react";

// Components
import { Container } from "reactstrap";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export const Page = ({ children }) =>
  <Container fluid className="page">
    <Header />
    {children}
    <Footer />
  </Container>;

export default Page;
