import React from 'react'
import styled from 'styled-components'


const WrappedSpanActive = styled.span`
    color: #21B24A;
    font-weight: 600;
    position: relative;

    ::after {
        content: '';
        position: absolute;
        bottom: -1.5rem;
        left: -18%;
        height: 0.4rem;
        width: 135%;
        background: #21B24A;
        @media screen and (max-width: 1279px) {
            left: -11%;
            width: 120%;
        }
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`

const WrappedSpan = styled.span`
    color: #989898;
    font-weight: 400;

    :hover {
        color: #757575;
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`

const OurWorkBtn:React.FC<{
    children?: React.ReactNode,
    active: number,
    setActive: any,
    btnNum: number,
}> = ({children, active, setActive, btnNum}) => {

    return (
        active === btnNum
            ? <WrappedSpanActive onClick={() => setActive(btnNum)}>
                {children}
            </WrappedSpanActive>
            : <WrappedSpan onClick={() => setActive(btnNum)}>
                {children}
            </WrappedSpan>
    )
}

export default OurWorkBtn