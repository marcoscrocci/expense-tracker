import React, { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string,
    children: React.ReactNode
}

function Link({ children, href, ...props }: Props) {
  return (
    <NextLink href={href}>
        <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link