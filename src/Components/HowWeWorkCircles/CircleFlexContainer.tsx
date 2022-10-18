import styled from 'styled-components'

const CircleFlexContainer: React.FC<{
    children?: React.ReactNode,
    textNum: number,
    active: number,
}> = ({children, textNum, active}) => {

    const WrappedDiv = styled.div`
        display: flex;
        flex-direction: column;
        font-family: 'Gilroy', sans-serif;
        font-weight: 500;
        color: ${textNum <= active ? '#21B24A' : '#2F2F2F'};
        font-size: 2rem;
        line-height: 2.6rem;
        white-space: nowrap;
        margin-right: 2rem;
    `

    return (
        <WrappedDiv>
            {children}
        </WrappedDiv>
    )
}

export default CircleFlexContainer