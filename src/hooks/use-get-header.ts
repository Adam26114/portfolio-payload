import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'types'

const fetchHeaderNavLinks = async (): Promise<NavLink[]> => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_PUBLIC_SERVER_URL}/api/globals/header`,
    )
    if (!response.ok) {
        throw new Error('Failed to fetch header data')
    }
    const data = await response.json()
    return data.navLinks || []
}

export const useGetHeader = () => {
    return useQuery({
        queryKey: ['headerNavLinks'],
        queryFn: fetchHeaderNavLinks,
    })
}
