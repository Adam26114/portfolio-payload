import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator' // Import the Separator component
import { NavLink } from 'types'
import { Logo } from '@/components/Logo/Logo'

interface FooterProps {
    navLinks: NavLink[]
}

export const Footer = ({ navLinks }: FooterProps) => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Logo and Description */}
                <div className="flex items-start">
                    <Logo />
                    <div className="flex flex-col gap-2">
                        <span className="text-xl font-bold">Zwe Portfolio</span>
                        <p className="text-sm text-gray-600">
                            A showcase of my projects, skills, and experiences. Built with passion
                            and creativity.
                        </p>
                    </div>
                </div>

                {/* Middle Column: Useful Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Useful Links</h3>
                    <div className="flex flex-col space-y-2">
                        {navLinks.length > 0 ? (
                            navLinks.map((link) => (
                                <Button
                                    key={link.id}
                                    asChild
                                    variant="link"
                                    className="justify-start"
                                >
                                    <Link href={link.url}>{link.label}</Link>
                                </Button>
                            ))
                        ) : (
                            <span className="text-sm text-gray-600">No links available</span>
                        )}
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Me</h3>
                    <form className="space-y-4">
                        <Input type="email" placeholder="Your email" className="w-full" />
                        <Button type="submit" className="w-full">
                            Subscribe
                        </Button>
                    </form>
                    <p className="text-sm text-gray-600">
                        Stay updated with my latest projects and blog posts.
                    </p>
                </div>
            </div>

            {/* Separator and Copyright Section */}
            <div className="w-full mx-auto px-4 mt-8">
                <Separator className="my-4" /> {/* Add a separator */}
                <p className="text-sm text-center text-gray-600">
                    &copy; {new Date().getFullYear()} Zwe Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
