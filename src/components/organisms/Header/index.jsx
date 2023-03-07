import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Header({ children }) {
  return (
    <>
      <header className="bg-dark py-5">
        <Container className="px-5">
          <Row className="gx-5 justify-content-center">
            <Col lg={6}>
              <div className="text-center my-5">{children}</div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
