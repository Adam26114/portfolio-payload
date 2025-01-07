import { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
    slug: 'contact',
    fields: [
        { name: 'email', type: 'text', required: true },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
    ],
}
