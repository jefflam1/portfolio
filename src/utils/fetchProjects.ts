import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project } from '../../typings'

const query = groq`
    *[_type=='project'] | order(_updatedAt desc) {
        ...,
        technologies[] ->
    }
`

export const fetchProjects = async () => {
    const res = await sanityClient.fetch(query)

    const projects: Project[] = res

    return projects
}

