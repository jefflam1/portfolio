interface SanityBody {
    _createdAt: string
    _id: string
    _rev: string
    _updatedAt: string
}

interface Image {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
}

export interface PageInfo extends SanityBody {
    _type: pageInfo
    backgroundInfomation: string
    email: string
    heroImage: Image
    name: string
    phoneNumber: string
    profilePic: Image
    role: string
    socials: string
}

export interface Experience extends SanityBody {
    _type: 'experience'
    company: string
    companyImage: Image
    dateStarted: date
    dateEnded: date
    isCurrentlyWorkingHere: boolean
    jobTitle: string
    points: string[]
    technologies: Technology[]
}

export interface Technology extends SanityBody {
    _type: 'technology'
    image: Image
    progress: number
    title: string
}

export interface SkillTypes extends SanityBody {
    _type: 'skill'
    image: Image
    progress: number
    title: string
}

export interface Project extends SanityBody {
    _type: 'project'
    title: string
    image: Image
    linkToBuild: string
    summary: string
    technologies: Technology[]
}

export interface Social extends SanityBody {
    _type: 'Social'
    title: string
    url: string
}

