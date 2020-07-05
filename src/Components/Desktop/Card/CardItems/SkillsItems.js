import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {
	FcApproval
} from 'react-icons/fc';
import '../../../../css/Desktop/SkillsItems.css'

const SkillsItems = ({ title, contains }) => {
	return (
		<div className="SkItemDiv">
			<Container fluid >
				<Row >
					<Container fluid >

						<Row className="sk-title-row">
							<span className="sk-title">
								{title}
							</span>
						</Row>

						<Row className="m-sk-space">
							{contains.map((c, index) => (
								<Col lg={5} md={6} key={index}>
									<span className="cont">
										<FcApproval /> &nbsp; &nbsp;{c}
									</span>
								</Col>
							)
							)
							}
						</Row>
					</Container>
				</Row>
			</Container>
		</div>
	)
}

export default SkillsItems