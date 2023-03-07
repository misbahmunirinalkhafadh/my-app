import React from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="w-30 p-20">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label id="email">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label id="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={() => navigate("/home")}>
                    Login
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
