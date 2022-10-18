import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const OurWorkMobileBtnAll:React.FC<{
    children?: React.ReactNode,
}> = ({children}) => {

    const [isActiveBtnAll, setActiveBtn] = useState(false)

    const WrappedDiv = styled.div`
        border: 0;
        flex-direction: column;
        font-size: 3.6rem;
        line-height: 130%;
        padding: 0;
        margin-bottom: 4.6rem;
        background-color: #fff;
    `

    const WrappedChildrenDiv = styled.div`
        ${
            isActiveBtnAll === true
            ? 'display: block;'
            : 'display: none;'
        }
    `

    const activeBtn = [
        'color: #FFF',
        'font-weight: 600',
        'background-color: #21B24A',
        'line-height: 120%',
        '> div { position: relative',
        'display: inline',
        `::before { content: ''`,
        'position: absolute',
        'right: 0',
        'top: 30%',
        'width: 0',
        'height: 0',
        'border-left: 2rem solid transparent',
        'border-right: 2rem solid transparent',
        'border-bottom: 2.6rem solid #fff',
        'margin-right: 3rem } }'
    ]

    const notActiveBtn = [
        'color: #989898',
        'font-weight: 400',
        'background-color: #E5E5E5',
        'border: 1px solid #989898',
        'line-height: 120%',
        '> div { position: relative',
        'display: inline',
        `::before { content: ''`,
        'position: absolute',
        'right: 0',
        'top: 30%',
        'width: 0',
        'height: 0',
        'border-left: 2rem solid transparent',
        'border-right: 2rem solid transparent',
        'border-top: 2.6rem solid #989898',
        'margin-right: 3rem } }'
    ]

    let style: Array<string> = []

    isActiveBtnAll === true
    ? style = activeBtn
    : style = notActiveBtn

    const WrappedSpan = styled.span`
        ${ style.join(';') }
        display: flex;
        justify-content: space-between;
        padding: 3.6rem 0 3.6rem 4rem;

        @media screen and (min-width: 700px) {
            display: none;
        }
    `

    return (
        <WrappedDiv>
            <WrappedSpan onClick={() => setActiveBtn(!isActiveBtnAll)}>
                Все<div/>
            </WrappedSpan>
            <WrappedChildrenDiv>
                {children}
            </WrappedChildrenDiv>
        </WrappedDiv>
    )
}

export default OurWorkMobileBtnAll