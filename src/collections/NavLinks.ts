import { CollectionConfig } from 'payload'

export const NavLinks: CollectionConfig = {
    slug: 'nav-links',
    admin: {
        useAsTitle: 'label',
    },
    fields: [
        {
            name: 'label',
            type: 'text',
            required: true,
        },
        {
            name: 'url',
            type: 'text',
            required: true,
        },
    ],
}
