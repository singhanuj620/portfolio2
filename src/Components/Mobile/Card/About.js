import React from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { IconContext } from 'react-icons';
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaHackerrank,
    FaTwitter,
    FaPhoneAlt,
    FaMailBulk,
    FaCalendarAlt
} from 'react-icons/fa';
import info from '../../../info'
import '../../../css/Mobile/About.css'
const { about } = info

const About = () => {
    return (
        <Container fluid>
            <Row>
                <img alt="dp" src="./images/dp.jpg" className="rounded-circle m-dp" />
            </Row>
            <br/>
            <Row>
                <div className="m-info-name">
                    <span className="first-name">{about.first}</span>
                    <span className="last-name">{about.last}</span>
                </div>
            </Row>
            <br />
            <Row className="m-phone-email">
                <Col sm={12}>
                    <span> <FaPhoneAlt /> &nbsp; {about.phone}</span>
                </Col>
                <Col sm={12}>
                    <span><FaMailBulk /> &nbsp; {about.email}</span>
                </Col>

                <Col sm={12}>
                    <span><FaCalendarAlt /> &nbsp; {about.dob}</span>
                </Col>
            </Row>
            <Row className="m-desc">
                <Container>
                    {about.desc}
                </Container>
            </Row>


            {/* <Row className="m-follow">
                <Col sm={12}>
                        <Row className="m-icons">
                            <Col sm={4}>
                                <IconContext.Provider value={{ size: "2.5rem" }}>
                                    <div className="m-set-icon">
                                        <a rel="noopener noreferrer" href={about.follow.linkedin} target="_blank"><FaLinkedin /></a>
                                    </div>
                                </IconContext.Provider>
                            </Col>

                            <Col sm="auto" >
                                <IconContext.Provider value={{ size: "2.5rem" }}>
                                    <div className="m-set-icon">
                                        <a rel="noopener noreferrer" href={about.follow.github} target="_blank"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                            </Col>

                            <Col sm="auto" >
                                <IconContext.Provider value={{ size: "2.5rem" }}>
                                    <div className="m-set-icon">
                                        <a rel="noopener noreferrer" href={about.follow.hackerrank} target="_blank"><FaHackerrank /></a>
                                    </div>
                                </IconContext.Provider>
                            </Col>

                            <Col sm="auto" >
                                <IconContext.Provider value={{ size: "2.5rem" }}>
                                    <div className="m-set-icon">
                                        <a rel="noopener noreferrer" href={about.follow.instagram} target="_blank"><FaInstagram /></a>
                                    </div>
                                </IconContext.Provider>
                            </Col>

                            <Col sm="auto" >
                                <IconContext.Provider value={{ size: "2.5rem" }}>
                                    <div className="m-set-icon">
                                        <a rel="noopener noreferrer" href={about.follow.twitter} target="_blank"><FaTwitter /></a>
                                    </div>
                                </IconContext.Provider>
                            </Col>
                        </Row>
                </Col>
                <Col lg={3}></Col>
            </Row> */}

            <Row className="m-follow">
                <Col className="m-icons">
                    <IconContext.Provider value={{ size: "2.5rem" }}>
                        <div className="m-set-icon">
                            <a rel="noopener noreferrer" href={about.follow.linkedin} target="_blank"><FaLinkedin /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
                <Col className="m-icons">
                    <IconContext.Provider value={{ size: "2.5rem" }}>
                        <div className="m-set-icon">
                            <a rel="noopener noreferrer" href={about.follow.github} target="_blank"><FaGithub /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
                <Col className="m-icons">
                    <IconContext.Provider value={{ size: "2.5rem" }}>
                        <div className="m-set-icon">
                            <a rel="noopener noreferrer" href={about.follow.hackerrank} target="_blank"><FaHackerrank /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
            </Row>

            <Row className="m-follow">
                <Col className="m-icons">
                    <IconContext.Provider value={{ size: "2.5rem" }}>
                        <div className="m-set-icon">
                            <a rel="noopener noreferrer" href={about.follow.instagram} target="_blank"><FaInstagram /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
                <Col className="m-icons">
                    <IconContext.Provider value={{ size: "2.5rem" }}>
                        <div className="m-set-icon">
                            <a rel="noopener noreferrer" href={about.follow.twitter} target="_blank"><FaTwitter /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
            </Row>

            <Row className="m-follow">
                
            </Row>
        </Container>
    )
}

export default About;