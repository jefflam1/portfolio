import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { SkillTypes } from '../../typings'

const query = groq`
    *[_type=='skill']
`

export const fetchSkills = async () => {
    const res = await sanityClient.fetch(query)

    const skills: SkillTypes[] = res

    return skills
}

