import React from 'react'
import EducationItems from './CardItems/EducationItems'
import info from '../../../info'
const {education} = info

const Education = () => {
	return (
		<div>
			{education.map( (edu, index) => {
				return (<EducationItems 
					key={index} 
					course={edu.course}
					university={edu.university}
					college={edu.college}
					percentage={edu.percentage}
					year={edu.year}
				/>)
			})}
		</div>
		)
}

export default Education