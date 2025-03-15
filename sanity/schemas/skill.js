export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            desciption: 'Title of the skill',
            type: 'string',
        },
        {
            name: 'progress',
            title: 'Progress',
            type: 'number',
            desciption: 'Progress of skill from 0 to 100%',
            validation: (rule) => rule.min(0).max(100),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}

