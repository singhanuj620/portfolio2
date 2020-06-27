import React from 'react'
import ProjectsItems from './CardItems/ProjectsItems'
import info from '../../../info'
const {projects} = info

const Projects = () => {

	return (
		<div>
			{projects.map( (pro, index) => {
				return (<ProjectsItems 
					key={index} 
					title={pro.title}
					description={pro.description}
					demo_url={pro.demo_url}
					tags={pro.tags}
					url={pro.url}
				/>)
			})}
		</div>
		)
}

export default Projects