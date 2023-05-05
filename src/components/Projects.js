import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fastfood.png";
import projImg2 from "../assets/img/grille.png";
import projImg3 from "../assets/img/organic.png";
import projImg4 from "../assets/img/marketing.png";
import projImg5 from "../assets/img/toure.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link:"https://mikiyas-fiseha.github.io/Fast_Food_Website/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link:"https://mikiyas-fiseha.github.io/RestaurantWebsite/"

    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link:"https://mikiyas-fiseha.github.io/groceriesStore/"

    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
      link:"https://mikiyas-fiseha.github.io/DigitalAgency/"

    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      link:"https://mikiyas-fiseha.github.io/TravelAgency/"

    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link:"https://www.google.com/"

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my projects section! Here, you'll find a collection of my solo projects, which I've divided into three categories: frontend, fullstack, and WordPress. Each project showcases my skills in different areas of web development and design, and I'm excited to share them with you.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">FRONTEND</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">FULLSTACK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">WORD PRESS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row></Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
