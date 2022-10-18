import React from 'react'
import styled from 'styled-components'

const OurWorkMobileBtn:React.FC<{
    children?: React.ReactNode,
    active: number,
    setActive: any,
    btnNum: number,
}> = ({children, active, setActive, btnNum}) => {

    const WrappedDiv = styled.div`
        border: 0;
    `

    const WrappedSpanActive = styled.span`
        color: #21B24A;
        font-weight: 600;
        position: relative;
        background-color: #F8F8F8;
        display: block;
        padding: 2.8rem 4rem;

        @media screen and (min-width: 700px) {
            display: none;
        }
    `

    const WrappedSpan = styled.span`
        color: #989898;
        font-weight: 400;
        display: block;
        padding: 2.8rem 4rem;

        @media screen and (min-width: 700px) {
            display: none;
        }
    `

    return (
        <WrappedDiv>
        {
            active === btnNum
            ? <WrappedSpanActive onClick={() => setActive(btnNum)}>
                {children}
            </WrappedSpanActive>
            : <WrappedSpan onClick={() => setActive(btnNum)}>
                {children}
            </WrappedSpan>
        }
        </WrappedDiv>
    )
}

export default OurWorkMobileBtn