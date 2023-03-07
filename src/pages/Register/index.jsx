import React, { useRef } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    navigate("/login");
  };
  return (
    <>
      <Container>
        <Row className="mt-30">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="w-30 p-20">
              <Form action="/#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label id="fullName">Fullname</Form.Label>
                  <Form.Control
                    type="fullName"
                    id="fullName"
                    isInvalid={errors.fullName}
                    aria-invalid={errors.fullName ? "true" : "false"}
                    placeholder="Fullname"
                    {...register("fullName", {
                      required: "Fullname is required",
                    })}
                  />
                  {errors.fullName && (
                    <Form.Text className="text-danger">
                      {errors.fullName?.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label id="email">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    isInvalid={errors.email}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email?.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label id="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    isInvalid={errors.password}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password?.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label id="confirmPassword">Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="confirmPassword"
                    isInvalid={errors.confirmPassword}
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <Form.Text className="text-danger">
                      {errors.confirmPassword?.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary">
                    Register
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
