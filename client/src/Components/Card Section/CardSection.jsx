import React from "react";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../Card Section/3.png";
import projImg2 from "../Card Section/2.png";
import projImg3 from "../Card Section/1.png";
import { Button } from "@mui/material";
import TrackVisibility from "react-on-screen";

const CardSection = () => {
  const projects = [
    {
      title: "Find your nearest Hospital",
      description: "Click the button below",
      imgUrl: projImg1,
    },
    {
      title: "Find a Doctor",
      description: "Click the button below",
      imgUrl: projImg2,
    },
    {
      title: "Buy Medicine at Ease",
      description: "Click the button below",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Why choose us?</h2>
                  <p>
                    Medkit gives you the best tools and information you need to.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <h2 className="features">
                          What features do we provide?
                        </h2>
                        <br />

                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <div className="btn-flex-1">
                          <Button
                            onClick={() => {
                              console.log("clicked");
                            }}
                            variant="contained"
                          >
                            Find A Hospital
                          </Button>
                        </div>
                        <div className="btn-flex-2">
                          <Button
                            onClick={() => {
                              console.log("clicked");
                            }}
                            variant="contained"
                          >
                            Find A Doctor
                          </Button>
                        </div>
                        <div className="btn-flex-3">
                          <Button
                            onClick={() => {
                              console.log("clicked");
                            }}
                            variant="contained"
                          >
                            Buy Medicine
                          </Button>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="wrapper-map-div">
                          <div className="img-tab2">
                            <img
                              className="imgimg-map"
                              src="https://cdn.discordapp.com/attachments/990608473882501151/1018453976485740614/Screenshot_2022-09-11_142226.png"
                              alt="map image"
                            />
                          </div>
                          <div className="text-tab2">
                            <h2 className="features">
                              Locate your nearest Hospital
                            </h2>

                            <p>
                              Get location of your nearby hospital with its
                              contact details. Medkit fetch your location and
                              search in its database for the nearest hospital
                              for you and give you its location in just a moment
                              of time.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="wrapper-map-div">
                          
                          <div className="text2-tab22">
                            <h2 className="features">30,000</h2>

                            <p>Cured Cases</p>
                          </div>

                          <div className="text2-tab23">
                            <h2 className="features">30,000</h2>

                            <p>Cured Cases</p>
                          </div>
                          <div className="text2-tab22">
                            <h2 className="features">30,000</h2>

                            <p>Cured Cases</p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default CardSection;
