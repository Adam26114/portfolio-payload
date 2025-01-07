'use client'

import { Header } from '@/Header/components/Header'
import { Footer } from '@/Footer/components/Footer'
import { useGetHeader } from '@/hooks/use-get-header'
import { useGetFooter } from '@/hooks/use-get-footer'

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    const {
        data: headerNavLinks,
        isLoading: isHeaderLoading,
        isError: isHeaderError,
    } = useGetHeader()

    const {
        data: footerNavLinks,
        isLoading: isFooterLoading,
        isError: isFooterError,
    } = useGetFooter()

    if (isHeaderLoading || isFooterLoading) {
        return <div>Loading...</div> // Add a loading state
    }

    if (isHeaderError || isFooterError) {
        return <div>Failed to fetch data</div> // Add an error state
    }

    console.log(headerNavLinks);

    return (
        <>
            <Header navLinks={headerNavLinks || []} />
            {children}
            <Footer navLinks={footerNavLinks || []} />
        </>
    )
}
