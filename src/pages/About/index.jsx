import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../components";

export default function About() {
  return (
    <>
      {/* Header */}
      <Header>
        <h1 className="display-5 fw-bolder text-white mb-2">About</h1>
        <p className="lead text-white-50 mb-4">
          Disini menjelaskan tentang company profile dan struktur organisasi dan
          juga tujuan dari website ini
        </p>
      </Header>
      {/* END Header */}

      <section className="py-5 border-bottom">
        <Container className="px-5 my-5">
          <div>Company Profile</div>
        </Container>
      </section>

      <section className="bg-light py-5 border-bottom">
        <Container className="px-5 my-5">
          <div>Struktur Organisasi</div>
        </Container>
      </section>
    </>
  );
}
