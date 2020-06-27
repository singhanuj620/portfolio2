import React from 'react'
import { Container } from 'reactstrap'


import About from './Card/About'
import Education from './Card/Education'
import Skills from './Card/Skills'
import Projects from './Card/Projects'
import Awards from './Card/Awards'

const Content = ({pageName}) => {

	switch(pageName)
	{
		case 'about' :
			return ( <Container> <About/> </Container> )

		case 'education':
			return ( <Container> <Education /> </Container> )

		case 'skills':
			return ( <Container> <Skills /> </Container> )

		case 'projects':
			return ( <Container> <Projects /> </Container> )

		case 'awards':
			return ( <Container> <Awards /> </Container> )

		default:
			return ( <Container> <About /> </Container> )
	}
}

export default Content