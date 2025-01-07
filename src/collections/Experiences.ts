import { CollectionConfig } from 'payload';

export const Experiences: CollectionConfig = {
    slug: 'experiences',
    admin: {
        useAsTitle: 'company',
    },
    fields: [
        { name: 'role', type: 'text', required: true },
        { name: 'description', type: 'textarea'},
        {
            name: 'company',
            type: 'relationship',
            relationTo: 'companies',
            required: true,
        },
        {
            name: 'projects',
            type: 'relationship',
            relationTo: 'projects',
            hasMany: true,
        },
        { name: 'resume', type: 'upload', relationTo: 'media' },
        { name: 'startDate', type: 'date', required: true },
        { name: 'endDate', type: 'date' },
        { name: 'isCurrent', type: 'checkbox', defaultValue: false },
       
    ],
};