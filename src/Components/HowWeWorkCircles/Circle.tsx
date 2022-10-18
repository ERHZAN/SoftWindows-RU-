import React from 'react'
import styled from 'styled-components'

const Circle: React.FC<{
    children?: React.ReactNode,
    circleNum: number,
    active: number,
    setActive: any,
}> = ({children, circleNum, active, setActive}) => {

    const WrappedCircleDiv = styled.div`
        ${circleNum < active
        ? 'border-color: #21B24A; color: #21B24A;'
        : circleNum === active
        ? 'background-color: #21B24A; color: #fff;'
        : 'border-color: #AFAFAF; color: #AFAFAF;'}
        border: 0.2rem solid;
        border-radius: 50%;
        width: 7rem;
        height: 7rem;
        margin: 0 auto 1.5rem;
        font-family: 'Gilroy', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 3.92rem;
        letter-spacing: 5%;
        text-align: center;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    `
    // console.log(`Circle render ${circleNum}`)

    return (
        <WrappedCircleDiv onClick={() => {setActive(circleNum)}}>
            {children}
        </WrappedCircleDiv>
    )
}

export default React.memo(
    Circle,
    (prevProps, nextProps) => {
        console.log(prevProps, nextProps)
        return true
    }
)