import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'testimonial', type: 'textarea', required: true },
        { name: 'avatar', type: 'upload', relationTo: 'media', required: true },
    ],
}
