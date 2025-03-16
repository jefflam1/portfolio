import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import { SkillTypes } from '../../../typings'

const query = groq`
    *[_type=='skill']
`

type Data = {
    skills: SkillTypes[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const skills: SkillTypes[] = await sanityClient.fetch(query)

    res.status(200).json({ skills })
}

