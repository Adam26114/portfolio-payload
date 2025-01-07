import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
    slug: 'footer',
    fields: [
        {
            name: 'navLinks',
            type: 'relationship',
            relationTo: 'nav-links',
            hasMany: true,
            required: true,
        },
    ],
}
