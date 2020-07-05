import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import info from '../../../info'
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
import '../../../css/Desktop/About.css'
const { about } = info



const About = () => {

	return (
		<Container fluid>
			<Row className="name-heading m-top-space">
				<Container fluid>
					<Row className="hid-dp center-dp">
						<img alt="dp" src="./images/dp.jpg" className="rounded-circle m-dp" />
					</Row>
					<Row>
						<Col lg={8} md={8} className="info-name">
							<span className="first-name">{about.first}</span>
							<span className="last-name">{about.last}</span>
						</Col>
						<Col lg={4} md={4}></Col>
					</Row>
					<Row className="phone-email">
						<Col lg={4} md={6} sm={12}>
							<span> <FaPhoneAlt /> &nbsp; {about.phone}</span>
						</Col>
						<Col lg={4} md={6} sm={12}>
							<span><FaMailBulk /> &nbsp; {about.email}</span>
						</Col>

						<Col lg={4} md={6} sm={12}>
							<span><FaCalendarAlt /> &nbsp; {about.dob}</span>
						</Col>
					</Row>
				</Container>
			</Row>


			<Row className="desc">
				<Container>
					{about.desc}
				</Container>
			</Row>


			<Row className="follow">
				<Col lg={9} sm="auto">
					<Container fluid>
						<Row className="icons">
							<Col lg={2} md={2} sm="auto" className="m-iconset">
								<IconContext.Provider value={{ size: "3rem" }}>
									<div className="set-icon">
										<a rel="noopener noreferrer" href={about.follow.linkedin} target="_blank"><FaLinkedin /></a>
									</div>
								</IconContext.Provider>
							</Col>

							<Col lg={2} md={2} sm="auto" className="m-iconset">
								<IconContext.Provider value={{ size: "3rem" }}>
									<div className="set-icon">
										<a rel="noopener noreferrer" href={about.follow.github} target="_blank"><FaGithub /></a>
									</div>
								</IconContext.Provider>
							</Col>

							<Col lg={2} md={2} sm="auto" className="m-iconset">
								<IconContext.Provider value={{ size: "3rem" }}>
									<div className="set-icon">
										<a rel="noopener noreferrer" href={about.follow.hackerrank} target="_blank"><FaHackerrank /></a>
									</div>
								</IconContext.Provider>
							</Col>

							<Col lg={2} md={2} sm="auto" className="m-iconset">
								<IconContext.Provider value={{ size: "3rem" }}>
									<div className="set-icon">
										<a rel="noopener noreferrer" href={about.follow.instagram} target="_blank"><FaInstagram /></a>
									</div>
								</IconContext.Provider>
							</Col>

							<Col lg={2} md={2} sm="auto" className="m-iconset">
								<IconContext.Provider value={{ size: "3rem" }}>
									<div className="set-icon">
										<a rel="noopener noreferrer" href={about.follow.twitter} target="_blank"><FaTwitter /></a>
									</div>
								</IconContext.Provider>
							</Col>
						</Row>
					</Container>
				</Col>
				<Col lg={3}></Col>
			</Row>



		</Container>
	)
}

export default About