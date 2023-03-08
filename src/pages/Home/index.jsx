import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  BsArrowRight,
  BsBuilding,
  BsCollection,
  BsToggles2,
} from "react-icons/bs";

import { Header } from "../../components";

export default function Home() {
  const [data, setData] = useState({});

  async function getPets() {
    try {
      const response = await axios.get("https://pets-v2.dev-apis.com/pets");
      setData(response.data);
      console.log(response.data.pets);
    } catch (error) {
      console.error(error);
    }
  }

  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      {/* Header */}
      <Header>
        <h1 className="display-5 fw-bolder text-white mb-2">
          Present your business in a whole new way
        </h1>
        <p className="lead text-white-50 mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world's most popular front-end open source toolkit!
        </p>
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <Button variant="primary" size="lg" href="#features">
            Get Started
          </Button>
          <Button variant="outline-light" size="lg">
            Learn More
          </Button>
        </div>
      </Header>

      {/* Section */}
      <section className="py-5 border-bottom" id="features">
        <Container className="px-5 my-5">
          <Row className="gx-5">
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <BsCollection />
              </div>
              <h2 className="h4 fw-bolder">Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a className="text-decoration-none" href="#!">
                Call to action
                <BsArrowRight />
              </a>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 w-20 h-20">
                <BsBuilding width={20} height={50} />
              </div>
              <h2 className="h4 fw-bolder">Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a className="text-decoration-none" href="#!">
                Call to action
                <BsArrowRight />
              </a>
            </Col>
            <Col lg={4}>
              <BsToggles2
                width={20}
                height={20}
                className="feature bg-primary bg-gradient text-white rounded-3 mb-3 w-20 h-20"
              />
              <h2 className="h4 fw-bolder">Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a className="text-decoration-none" href="#!">
                Call to action
                <BsArrowRight />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Article */}
      <section className="bg-light py-5 border-bottom">
        <Container className="px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">New Articles</h2>
            <p className="lead mb-0">Lorem ipsum dolor sit amet</p>
          </div>
          <Row className="gx-5 justify-content-center">
            {data !== undefined &&
              data?.pets?.slice(0, 3).map((item, i) => (
                <Col key={i} lg={6} xl={4}>
                  <Card>
                    <Card.Img variant="top" src={item.images[0]} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text style={{ WebkitLineClamp: 3, lineClamp: 3, textOverflow:'ellipsis' }}>
                        {limit(item.description, 220)}
                      </Card.Text>
                      <div className="d-grid">
                        <Button
                          href={`/articles/detail/${item.id}`}
                          variant="outline-primary">
                          Go somewhere
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
