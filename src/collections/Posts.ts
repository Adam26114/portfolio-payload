import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({
                admin: {
                    hideGutter: true,
                    
                },
            }),
            required: true,
        },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'date', type: 'date', required: true },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            required: true,
        },
    ],
}
