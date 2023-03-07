import React from "react";
import { Form } from "react-bootstrap";

export default function LabelInput({ name, id, ...props }) {
  return (
    <>
      <Form.Label htmlFor={id} {...props}>
        {name}
      </Form.Label>
    </>
  );
}
