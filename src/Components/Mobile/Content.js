import React from 'react'
import '../../css/Mobile/Content.css';
import { Container } from 'reactstrap'


import About from './Card/About'
import Education from './Card/Education'
import Skills from './Card/Skills'
import Projects from './Card/Projects'
import Awards from './Card/Awards'

const Content = ({ pageName }) => {

    switch (pageName) {
        case 'about':
            return (<Container className="main-content-mobile"> <About /> </Container>)

        case 'education':
            return (<Container className="main-content-mobile"> <Education /> </Container>)

        case 'skills':
            return (<Container className="main-content-mobile"> <Skills /> </Container>)
        
        case 'projects':
            return (<Container className="main-content-mobile"> <Projects /> </Container>)

        case 'awards':
            return (<Container className="main-content-mobile"> <Awards /> </Container>)

        default:
            return (<Container> <About /> </Container>)
    }
}

export default Content