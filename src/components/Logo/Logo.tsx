import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'

interface Props {
    className?: string
    loading?: 'lazy' | 'eager'
    priority?: boolean
    variant?: 'default' | 'white'
}

export const Logo = (props: Props) => {
    const {
        loading: loadingFromProps,
        priority: priorityFromProps,
        className,
        variant = 'default',
    } = props

    const loading = loadingFromProps || 'lazy'
    const priority = priorityFromProps || false

    const logoSource = variant === 'white' ? '/logo-white.svg' : '/logo.svg'

    return (
        <Image
            alt="Logo"
            width={80}
            height={80}
            loading={loading}
            priority={priority}
            className={clsx('w-[80px] h-[80px]', className)}
            src={logoSource}
        />
    )
}
