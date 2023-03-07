import React from "react";
import { Button } from "react-bootstrap";

export default function Btn({ type, name, variant, ...props }) {
  return (
    <>
      <button type={type} variant={variant} {...props}>
        {name}
      </button>
    </>
  );
}
