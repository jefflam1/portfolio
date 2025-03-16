/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../../sanity'
import { Project } from '../../typings'

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    console.log(123, projects)
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="h-screen relative flex overflow-hidden flex-col text-left  max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div
                className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory 
            z-20 scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#048a81] cursor-pointer">
                {projects.map((project, id) => (
                    <a href={project.linkToBuild} target="_blank" key={project._id} rel="noreferrer">
                        <div className="w-screen shrink-0 snap-center flex flex-col space-y-5 items-center px-16 pt-48 pb-20 md:p-44 h-screen">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: -150,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1.2,
                                }}
                                viewport={{ once: true }}
                                src={urlFor(project.image).url()}
                                className="lg:max-w-[50%] object-contain"
                            />
                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className="text-3xl md:text-4xl font-semibold text-center">
                                    <span className="underline decoration-[#048a81]/50">
                                        Case study {id + 1} of {projects.length} :{' '}
                                    </span>
                                    {project.title}
                                </h4>
                                <div className="flex items-center gap-2 justify-center">
                                    {project.technologies?.map(
                                        (tech) =>
                                            tech.image && (
                                                <img
                                                    className="h-10 w-10"
                                                    key={tech._id}
                                                    src={urlFor(tech?.image)?.url()}
                                                    alt=""
                                                />
                                            ),
                                    )}
                                </div>
                                <p className="text-md text-center md:text-left h-[500px] overflow-y-scroll scrollbar-none">
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#048a81]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    )
}

export default Projects

