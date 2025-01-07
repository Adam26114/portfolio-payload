// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Contact } from './collections/Contact'
import { Posts } from './collections/Posts'
import Projects from './collections/Projects'
import { Skills } from './collections/Skills'
import { TechStacks } from './collections/TechStacks'
import { Testimonials } from './collections/Testimonials'
import { Company } from './collections/Company'
import { Experiences } from './collections/Experiences'
import { Categories } from './collections/Categories'
import { en } from '@payloadcms/translations/languages/en'
import { my } from '@payloadcms/translations/languages/my'
import { Header } from './Header'
import { Footer } from './Footer'
import { NavLinks } from './collections/NavLinks'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    i18n: {
        supportedLanguages: { en, my },
    },
    collections: [
        Users,
        Media,
        Contact,
        Posts,
        Projects,
        Skills,
        TechStacks,
        Testimonials,
        Company,
        Experiences,
        Categories,
        NavLinks,
    ],
    globals: [
        {
            ...Header,
            access: {
            read: () => true, 
            },
        },
        {
            ...Footer,
            access: {
                read: () => true, 
            },
        },
    ],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        // storage-adapter-placeholder
    ],
})
