import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {
    FaTrophy,
    FaRegBuilding
} from 'react-icons/fa';
import '../../../../css/Mobile/Certi.css'

const Certifications = ({ certi }) => {
    return (
        <div>
            <Container>
                {
                    certi.map((c, index) => (
                        <div>
                            <Row className="m-certi-space">
                                <Container>
                                    <Row>
                                        <div className="m-certi-fa">
                                            <FaTrophy />
                                        </div>

                                        <Col>
                                            <span className="m-org">
                                                {c.title}
                                            </span>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>

                            <Row className="m-certi-space-2">
                                <Container>
                                    <Row>
                                        <div className="m-certi-fa">
                                            <FaRegBuilding />
                                        </div>

                                        <Col>
                                            <span className="m-org">
                                                {c.organisation}
                                            </span>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </div>
                    ))

                }
            </Container>
        </div>
    )
}

export default Certifications