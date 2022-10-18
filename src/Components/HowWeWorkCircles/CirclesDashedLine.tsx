import styled from 'styled-components'

const CirclesDashedLine: React.FC<{
    width: number,
    marginRight: number,
    lineNum: number,
    active: number,
}> = ({width, marginRight, lineNum, active}) => {

    const WrappedDiv = styled.div`
        width: ${width + '%'};
        border: 0.2rem dashed #21B24A;
        border-color: ${lineNum <= active ? '#21B24A' : '#C4C4C4'};
        margin: 4% 0 4% -6%;
        position: absolute;
        top: 43%;
        right: ${marginRight + '%'};
        @media screen and (max-width: 1919px) {
            width: ${width + 25 + '%'};
            right: ${marginRight - 25 + '%'};
        }
        @media screen and (max-width: 1679px) {
            width: ${width + 9 + '%'};
            right: ${marginRight - 9 + '%'};
        }
        @media screen and (max-width: 1599px) {
            width: ${width + 22 + '%'};
            right: ${marginRight - 22 + '%'};
        }
        @media screen and (max-width: 1399px) {
            width: ${width + 12 + '%'};
            right: ${marginRight - 12 + '%'};
        }
        @media screen and (max-width: 999px) {
            width: ${width + 54 + '%'};
            right: ${marginRight - 54 + '%'};
        }
    `

    return (
        <WrappedDiv />
    )
}

export default CirclesDashedLine