/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import { urlFor } from '../../sanity'
import { Experience } from '../../typings'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className="snap-center max-h-screen overflow-hidden h-full md:h-full bg-[#292929] md:p-10 flex flex-col rounded-l items-center gap-3 shrink-0 w-[300px] sm:w-[500px] md:w-[600px] cursor-pointer transition-opacity duration-200 opacity-40 hover:opacity-100">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
                src={urlFor(experience?.companyImage).url()}
            />

            <div className="px-3 md:px-10 flex flex-col h-full items-start">
                <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
                <p className="font-bold text-2xl mt-1">{experience.company}</p>
                <div className="flex flex-row flex-wrap my-2 space-x-2 ">
                    {experience.technologies.map(
                        (tech) =>
                            tech.image && (
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img key={tech._id} className="w-10 h-10 rounded-full" src={urlFor(tech.image).url()} />
                            ),
                    )}
                </div>
                <div className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString().substring(4)} -{' '}
                    {experience.isCurrentlyWorkingHere
                        ? 'Present'
                        : new Date(experience.dateEnded).toDateString().substring(4)}
                </div>

                <ul className="list-disc list-inside ml-5 text-lg w-full h-60 overflow-auto scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#048a81]">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard

