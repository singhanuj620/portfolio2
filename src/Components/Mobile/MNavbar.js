import React, { useState } from 'react';
import '../../css/Mobile/MNavbar.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Button } from 'reactstrap';

const MNavbar = ({changePageName}) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="info" light fixed="top">
                <NavbarBrand href="/" className="mr-auto">ANUJ SINGH</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink onClick={() => (changePageName("about"))} className="n-item">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => (changePageName("education"))} className="n-item">EDUCATION</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => (changePageName("skills"))} className="n-item">SKILLS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => (changePageName("projects"))} className="n-item">PROJECTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => (changePageName("awards"))} className="n-item">AWARDS</NavLink>
                        </NavItem>

                        <NavItem>
                            <Row className="m-resdiv">
                                <Button className="m-resbtn">Resume</Button>
                            </Row>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MNavbar;
