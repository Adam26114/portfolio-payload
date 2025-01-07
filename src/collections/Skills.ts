import { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
    slug: 'skills',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: false },
        { name: 'icon', type: 'upload', relationTo: 'media', required: true },
    ],
}
