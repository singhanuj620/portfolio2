import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {
    FaSchool,
    FaTrophy,
    FaPercent,
    FaCalendarAlt
} from 'react-icons/fa';
import '../../../../css/Mobile/EducationItems.css'

const EducationItems = ({ course, university, college, percentage, year }) => {
    return (
        <div className="m-EduItemDiv">
            <Container fluid >
                <Row >
                    <Container fluid>

                        <Row className="m-course-row">
                            <span className="m-course">
                                {course}
                            </span>
                        </Row>



                        <Row className="m-eduspace">
                            <Container>
                                <Row>
                                    <div className="m-edufa">
                                        <FaTrophy />
                                    </div>
                                    
                                    <Col>
                                        <span className="m-university">
                                            {university}
                                        </span>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>



                        <Row className="m-eduspace">
                            <Container>
                                <Row>
                                    <div className="m-edufa">
                                        <FaSchool />
                                    </div>
                                    <Col>
                                        <span className="m-university">
                                            {college}
                                        </span>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>

                        <Row className="m-eduspace">
                            <Container>
                                <Row>
                                    <div className="m-edufa">
                                        <FaPercent />
                                    </div>
                                    <Col>
                                        <span className="m-university">
                                            {percentage}
                                        </span>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>


                        <Row className="m-eduspace">
                            <Container>
                                <Row>
                                    <div className="m-edufa">
                                        <FaCalendarAlt />
                                    </div>
                                    <Col>
                                        <span className="m-university">
                                            {year}
                                        </span>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>

                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default EducationItems