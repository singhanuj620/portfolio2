import React, {useContext} from 'react'
import { PageContext } from '../../Context/PageContext'

import { Container, Row, Button } from 'reactstrap'
import '../../css/Desktop/Menu.css'

const Menu = ({changePageName}) => {

	const context = useContext(PageContext);

	return (
		<Container className="cnt">
			<Row className="photo">
				<img alt="dp" src="./images/dp.jpg" className="dp rounded-circle"/>
			</Row>
			<Row className="index">
				<ul className="menu-ul">
					

					{
						context.pageName === 'about' ? (
								<li className="text-white menu-li" onClick={ () => { changePageName('about') } } >About</li>
							) : (
								<li className="menu-li" onClick={ () => { changePageName('about') } } >About</li>
							)
					}


					{
						context.pageName === 'education' ? (
								<li className="text-white menu-li" onClick={ () => { changePageName('education') } }>Education</li>
							) : (
								<li className="menu-li" onClick={ () => { changePageName('education') } }>Education</li>
							)
					}
					


					{
						context.pageName === 'skills' ? (
								<li className="text-white menu-li" onClick={ () => { changePageName('skills') } }>Skills</li>
							) : (
								<li className="menu-li" onClick={ () => { changePageName('skills') } }>Skills</li>
							)
					}
					


					{
						context.pageName === 'projects' ? (
								<li className="text-white menu-li" onClick={ () => { changePageName('projects') } }>Projects</li>
							) : (
								<li className="menu-li" onClick={ () => { changePageName('projects') } }>Projects</li>
							)
					}



					{
						context.pageName === 'awards' ? (
								<li className="text-white menu-li" onClick={ () => { changePageName('awards') } }>Awards</li>
							) : (
								<li className="menu-li" onClick={ () => { changePageName('awards') } }>Awards</li>
							)
					}
					
					
					
				</ul>
			</Row>
			<Row className="resdiv">
				<Button className="resbtn">Resume</Button>
			</Row>
		</Container>
		)
}

export default Menu