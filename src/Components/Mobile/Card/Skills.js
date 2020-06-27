import React from 'react'
import SkillsItems from './CardItems/SkillsItems'
import info from '../../../info'
const { skills } = info

const Skills = () => {
    return (
        <div>
            {skills.map((sk, index) => {
                return (<SkillsItems
                    key={index}
                    title={sk.title}
                    contains={sk.contains}
                />)
            })}
        </div>
    )
}

export default Skills