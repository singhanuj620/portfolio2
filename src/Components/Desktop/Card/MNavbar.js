import React, { useState } from 'react';
import '../../../css/Desktop/MNavbar.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Button } from 'reactstrap';

const MNavbar = ({ changePageName }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="hid-nav">
            <Navbar color="info" light fixed="top" >
                <NavbarBrand href="/" className="mr-auto">ANUJ SINGH</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink onClick={() => {
                                changePageName("about")
                                toggleNavbar()
                            }
                            } className="n-item">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {
                                changePageName("education")
                                toggleNavbar()
                            }
                            } className="n-item">EDUCATION</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {
                                changePageName("skills")
                                toggleNavbar()
                            }
                            } className="n-item">SKILLS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {
                                changePageName("projects")
                                toggleNavbar()
                            }
                            } className="n-item">PROJECTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {
                                changePageName("awards")
                                toggleNavbar()
                            }
                            } className="n-item">AWARDS</NavLink>
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
