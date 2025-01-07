import { CollectionConfig } from 'payload'

export const TechStacks: CollectionConfig = {
    slug: 'tech-stacks',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'icon', type: 'upload', relationTo: 'media', required: false },
        { name: 'description', type: 'textarea', required: false },
        {
            name: 'skills',
            type: 'relationship',
            relationTo: 'skills',
            hasMany: true, 
            required: true,
        },
    ],
}
