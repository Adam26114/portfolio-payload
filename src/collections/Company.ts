import { CollectionConfig } from 'payload';

export const Company: CollectionConfig = {
    slug: 'companies',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media', required: true },
        { name: 'website', type: 'text' },
        { name: 'description', type: 'textarea' },
    ],
};