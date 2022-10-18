import styled from 'styled-components'

const WrappedParNum = styled.p`
    color: #21B24A1A;
    opacity: 0.9;
    font-weight: 700;
    font-size: 58.6rem;
    line-height: 76rem;
    font-family: 'Gilroy', sans-serif;
    position: absolute;

    @media screen and (min-width: 700px) {
        display: none;
    }
`

const HowWeWorkBackgroundNum: React.FC<{
    activeNum: number,
}> = ({activeNum}) => {
    return (
        <WrappedParNum>
            {activeNum}
        </WrappedParNum>
    )
}

export default HowWeWorkBackgroundNum