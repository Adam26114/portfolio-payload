import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavLink } from 'types'

interface HeaderProps {
    navLinks: NavLink[]
}

export const Header = ({ navLinks }: HeaderProps) => {
    console.log('navLinks:', navLinks)
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-lg font-bold">
                        My Website
                    </Link>
                    <nav className="flex space-x-4">
                        {navLinks.length > 0 ? (
                            navLinks.map((link, idx) => (
                                <Button key={link.id + idx} asChild variant="link">
                                    <Link href={link.url}>{link.label}</Link>
                                </Button>
                            ))
                        ) : (
                            <span>No links available</span>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}
