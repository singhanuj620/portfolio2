import React from 'react'
import { Container, Row, Col, Badge, Button } from 'reactstrap'
import { FaGithubAlt, FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../../../../css/Mobile/ProjectsItems.css'

const ProjectsItems = ({ title, description, demo_url, tags, url }) => {

    const all_color = ['primary', 'success', 'danger', 'warning', 'info']
    const l = all_color.length

    return (
        <div className="m-ProItemDiv">
            <Container fluid >
                <Row>
                    <Container fluid>

                        <Row className="m-pro-title-row">
                            <span className="m-pro-title">
                                {title}
                            </span>
                        </Row>

                        <Row className="m-tag-row">
                            {
                                tags.map((t, index) => (
                                    <div className="m-tags" >
                                        <Badge color={all_color[Math.floor(Math.random(0, l) * 10)]} pill>
                                            {t}
                                        </Badge>
                                    </div>
                                )
                                )
                            }
                        </Row>

                        <Row className="m-pro-cont">
                            <Container>
                                <span>
                                    {description}
                                </span>
                            </Container>
                        </Row>

                        <Container>
                            <Row className="m-links">

                                <Col>
                                    <span className="m-pro-link-main">
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            <Button color="info">
                                                <IconContext.Provider value={{ color: "black", size: "1.3rem" }}>
                                                    <FaGithubAlt />
                                                </IconContext.Provider>
                                                <span className="m-click-here-pro">
                                                    Github Repo
												</span>
                                            </Button>
                                        </a>
                                    </span>
                                </Col>

                                {
                                    demo_url === '' ? "" : (
                                        <Col>
                                            <span className="m-pro-link-main">
                                                <a href={demo_url} rel="noopener noreferrer" target="_blank">
                                                    <Button color="info">
                                                        <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                                                            <FaCode />
                                                        </IconContext.Provider>
                                                        <span className="m-click-here-pro">
                                                            Live Preview
															</span>
                                                    </Button>
                                                </a>
                                            </span>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Container>

                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsItems