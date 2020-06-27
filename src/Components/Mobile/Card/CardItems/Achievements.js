import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {
    FaTrophy
} from 'react-icons/fa';
import '../../../../css/Mobile/Achi.css'

const Achievements = ({ achi }) => {
    return (
        <div>
            <Container>
                {
                    achi.map((a, index) => (
                        <div key={index}>
                            <Row className="m-aw-sp">
                                <Container>
                                    <Row>
                                        <div className="m-aw-fa">
                                            <FaTrophy />
                                        </div>

                                        <Col>
                                            <span className="m-aw-org">
                                                {a}
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

export default Achievements