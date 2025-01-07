import { CollectionConfig } from 'payload'

const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: false },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'techStacks', type: 'relationship', relationTo: 'tech-stacks' },
        {
            name: 'website', 
            type: 'text',
            label: 'Website',
            admin: {
                placeholder: 'https://example.com',
            },
        },
        {
            name: 'github', // GitHub repository URL
            type: 'text',
            label: 'GitHub',
            admin: {
                placeholder: 'https://github.com/Adam26114',
            },
        },
        { name: 'date', type: 'date' },
    ],
}

export default Projects
