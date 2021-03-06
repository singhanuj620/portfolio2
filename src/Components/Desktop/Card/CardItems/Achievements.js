import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {
	FaTrophy
} from 'react-icons/fa';
import '../../../../css/Desktop/Achi.css'

const Achievements = ({ achi }) => {
	return (
		<div>
			<Container className="cont-sp">
				{
					achi.map((a, index) => (
						<div className="achi-space">
							<Row key={index}>

								<Col lg={11} md={11} sm={11}>
									<FaTrophy /><span className="achi-title">
										{a}
									</span>
								</Col>
							</Row>
						</div>
					))

				}
			</Container>
		</div>
	)
}

export default Achievements