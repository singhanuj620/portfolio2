import React from 'react'
import { Container, Row, Col, Badge, Button } from 'reactstrap'
import { FaGithubAlt, FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../../../../css/Desktop/ProjectsItems.css'

const ProjectsItems = ({ title, description, demo_url, tags, url }) => {

	const all_color = ['primary', 'success', 'danger', 'warning', 'info']
	const l = all_color.length

	return (
		<div className="ProItemDiv">
			<Container fluid >
				<Row>
					<Container fluid>

						<Row className="pro-title-row">
							<span className="pro-title">
								{title}
							</span>
						</Row>

						<Row className="tag-row">
							{
								tags.map((t, index) => (
									<div className="tags" >
										<Badge color={all_color[Math.floor(Math.random(0, l) * 10)]} pill>
											{t}
										</Badge>
									</div>
								)
								)
							}
						</Row>

						<Row className="pro-cont">
							<Container>
								<span>
									{description}
								</span>
							</Container>
						</Row>

						<Container>
							<Row className="links">

								<Col lg={6} md={6} sm={12} className="m-pro-btn-space">
									<span className="pro-link-main">
										<a href={url} rel="noopener noreferrer" target="_blank">
											<Button color="info">
												<IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
													<FaGithubAlt />
												</IconContext.Provider>
												<span className="click-here-pro">
													Github Repo
												</span>
											</Button>
										</a>
									</span>
								</Col>

								{
									demo_url === '' ? "" : (
										<Col lg={6} md={6} sm={12} className="m-pro-btn-space">
											<span className="pro-link-main">
												<a href={demo_url} rel="noopener noreferrer" target="_blank">
													<Button color="info">
														<IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
															<FaCode />
														</IconContext.Provider>
														<span className="click-here-pro">
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