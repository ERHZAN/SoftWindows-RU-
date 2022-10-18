import React from 'react'
import styled from 'styled-components'

const WrappedLink = styled.a`
    font-family: 'Gilroy', sans-serif;
    color: #21B24A;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
    border: 1px solid #21B24A;
    padding: 1rem 3rem;
    display: flex;
`

const HeaderTelLink: React.FC<{
    children?: React.ReactNode,
    link: string,
}> = ({children, link}) => {

    return (
        <WrappedLink href={link}>
            {children}
        </WrappedLink>
    )
}

export default React.memo(
    HeaderTelLink,
    () => {
        return true
    }
)