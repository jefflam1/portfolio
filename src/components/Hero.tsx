import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { urlFor } from '../../sanity'
import { PageInfo } from '../../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi, My Name is ${pageInfo.name}`, 'Guy-who-loves-Coffee.tsx', '<ButLovesToCodeMore />'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
            />
            <div className="z-20 w-full">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo.role}</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#048a81" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">ABOUT</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">EXPERIENCE</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">SKILLS</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">PROJECTS</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero










