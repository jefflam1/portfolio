import { motion } from 'framer-motion'
import Skill from './Skill'
import { SkillTypes } from '../../typings'

type Props = {
    skills: SkillTypes[]
}

const Skills = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="uppercase absolute top-12 md:top-16 tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            <h3 className="absolute top-28 md:top-32 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for current profieciency
            </h3>

            <div className="grid grid-cols-4 gap-5 xl:pt-20">
                {skills?.slice(0, skills.length / 2).map((skill, i) => (
                    <Skill key={skill._id} skill={skill} />
                ))}
                {skills?.slice(skills.length / 2, skills.length).map((skill, i) => (
                    <Skill key={skill._id} skill={skill} directionLeft />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills

