import React from 'react'
import { Container , Row , Col} from 'reactstrap'
import {
	FaSchool,
	FaTrophy,
	FaPercent,
	FaCalendarAlt
} from 'react-icons/fa';
import '../../../../css/Desktop/EducationItems.css'

const EducationItems = ({course,university, college, percentage, year}) => {
	return (
		<div className="EduItemDiv">
			<Container fluid >
				<Row>
					<Container fluid>

						<Row className="course-row">
							<span className="course">
								{course}
							</span>
						</Row>



						<Row>
							<span className="university">
								<FaTrophy/> &nbsp; &nbsp;{university}
							</span>
						</Row>



						<Row>
							<span className="university">
								<FaSchool/> &nbsp; &nbsp;{college}
							</span>
						</Row>


						<Row>
							<Col lg={6} md={6} className="grade">
								<span className="university">
									<FaPercent/> &nbsp; &nbsp;{percentage}
								</span>
							</Col>

							<Col lg={6} md={6} className="grade">
								<span className="university">
									<FaCalendarAlt/> &nbsp; &nbsp;{year}
								</span>
							</Col>
						</Row>
					</Container>
				</Row>
			</Container>
		</div>
		)
}

export default EducationItems