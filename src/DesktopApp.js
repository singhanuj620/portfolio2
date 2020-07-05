import React, { useState } from 'react';
import { PageContext } from './Context/PageContext'
import { Container, Row, Col } from 'reactstrap';
import './css/DesktopApp.css'

import Menu from './Components/Desktop/Menu'
import Content from './Components/Desktop/Content'
import MNavbar from './Components/Desktop/Card/MNavbar'


const DesktopApp = () => {

  const [pageName, setPageName] = useState("about")

  const changePageName = (page) => {
    setPageName(page)
  }

  return (
    <PageContext.Provider value={{ pageName, setPageName }}>
      <MNavbar changePageName={changePageName} />
      <Container fluid>
        <Row>
          <Col lg={3} md={3} className="menu sticky-top">
            <Menu changePageName={changePageName} />
          </Col>

          <Col lg={9} md={9} className="content">
            <Content pageName={pageName} />
          </Col>
        </Row>
      </Container>
    </ PageContext.Provider>
  );
}

export default DesktopApp;
