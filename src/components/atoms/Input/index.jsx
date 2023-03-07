import React from "react";
import { Form } from "react-bootstrap";

export default function Input({ id, name, type, placeholder, ...props }) {
  return (
    <>
      <Form.Control
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}
