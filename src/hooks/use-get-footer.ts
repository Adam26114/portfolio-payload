import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'types'

const fetchFooterNavLinks = async (): Promise<NavLink[]> => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_PUBLIC_SERVER_URL}/api/globals/footer`,
    )
    if (!response.ok) {
        throw new Error('Failed to fetch footer data')
    }
    const data = await response.json()
    return data.navLinks || []
}

export const useGetFooter = () => {
    return useQuery({
        queryKey: ['footerNavLinks'],
        queryFn: fetchFooterNavLinks,
    })
}
