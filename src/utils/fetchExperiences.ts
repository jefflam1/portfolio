import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Experience } from '../../typings'

const query = groq`
    *[_type=='experience'] | order(_createdAt asc) {
        ...,
        technologies[] ->
    }
`

export const fetchExperiences = async () => {
    const res = await sanityClient.fetch(query)

    const experiences: Experience[] = res

    return experiences
}

