import React from 'react'
import { Container , Row } from 'reactstrap'
import '../../../css/Desktop/Awards.css'
import info from '../../../info'
import Certifications from './CardItems/Certifications'
import Achievements from './CardItems/Achievements'
const {certifications} = info
const {achievements} = info


const Awards = () => {

	return (
		<div>
			<Container fluid >
				<Row >
					<Container fluid  className="AwItemDiv">
						<Row className="aw-title-row">
							<span className="aw-title">
								Certifications
							</span>
						</Row>

						<Row>
							<Certifications certi={certifications}/>
						</Row>
					</Container>


					<Container fluid  className="AwItemDiv">
						<Row className="aw-title-row">
							<span className="aw-title">
								Achievements
							</span>
						</Row>
							<Achievements achi={achievements}/>
						<Row>

						</Row>
					</Container>

				</Row>
			</Container>
		</div>
		)
}

export default Awards