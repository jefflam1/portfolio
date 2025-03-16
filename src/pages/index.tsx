import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { PageInfo, Project, SkillTypes, Social, Experience } from '../../typings'
import About from '../components/About'
import Contact from '../components/Contact'
import WorkExperience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocial'

type Props = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: SkillTypes[]
    projects: Project[]
    socials: Social[]
}

const Home = ({ pageInfo, experiences, socials, skills, projects }: Props) => {
    return (
        <div
            className="bg-[rgb(36,36,36)] text-white h-screen snap snap-mandatory overflow-y-scroll 
        overflow-x-hidden z-0 scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#048a81]">
            <Head>
                <title>Jeff Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header socials={socials} />

            <section id="hero" className="snap-center">
                <Hero pageInfo={pageInfo} />
            </section>

            {/* about */}
            <section id="about" className="snap-start">
                <About pageInfo={pageInfo} />
            </section>
            {/* Experience */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>

            {/* skills */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            {/* project */}
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            {/* contact me */}
            <section id="contact">
                <Contact pageInfo={pageInfo} />
            </section>

            <a href="#hero">
                <footer className="sticky bottom-24 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <ChevronDoubleUpIcon className="w-7 h-7 rounded-full cursor-pointer filter text-gray-300 hover:text-white" />
                    </div>
                </footer>
            </a>
        </div>
    )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo()
    const experiences: Experience[] = await fetchExperiences()
    const skills: SkillTypes[] = await fetchSkills()
    const projects: Project[] = await fetchProjects()
    const socials: Social[] = await fetchSocial()

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        revalidate: 10,
    }
}

