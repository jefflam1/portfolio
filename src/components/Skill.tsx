import { motion } from 'framer-motion'
import { urlFor } from '../../sanity'
import { SkillTypes } from '../../typings'

type IconProps = {
    skill: SkillTypes
    directionLeft?: boolean
}

const Skill = ({ directionLeft, skill }: IconProps) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                src={urlFor(skill?.image).url()}
                className="rounded-full border bg-[rgb(36,36,36)] border-gray-500 object-contain w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:w-16 sm:h-16 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill

