import { motion } from 'framer-motion'
import { urlFor } from '../../sanity'
import { PageInfo } from '../../typings'

type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-4 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
                src={urlFor(pageInfo?.profilePic).url()}
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold mt-10 md:mt-0">
                    Here is a <span className="underline decoration-[#048a81]">little</span> background
                </h4>
                <p className="text-base text-left">{pageInfo.backgroundInfomation}</p>
            </div>
        </motion.div>
    )
}

export default About















