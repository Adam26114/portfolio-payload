import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'navLinks',
            type: 'relationship',
            relationTo: 'nav-links',
            hasMany: true,
            required: true,
        },
    ],
    access: {
        read: () => true, // Allow public access
    },
}
