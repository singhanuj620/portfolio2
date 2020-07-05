import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {
	FaTrophy,
	FaRegBuilding
} from 'react-icons/fa';
import '../../../../css/Desktop/Certi.css'

const Certifications = ({ certi }) => {
	return (
		<div>
			<Container>
				{
					certi.map((c, index) => (
						<div className="certi-space">
							<Row key={index}>

								<Col lg={11} md={11} sm={11}>
									<FaTrophy /> <span className="certi-title">
										{c.title}
									</span>
								</Col>

								<Col lg={6} md={6} sm={6}>
								</Col>
								<div className="certi-sp">
									<Col lg={6} md={6} sm={6}>
										<span className="certi-org">
											<FaRegBuilding /> {c.organisation}
										</span>
									</Col>
								</div>
							</Row>
						</div>
					))

				}
			</Container>
		</div>
	)
}

export default Certifications