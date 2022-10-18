import styled from 'styled-components'

const InstalledActiveLineDiv: React.FC<{
    numOfActive: number,
}> = ({numOfActive}) => {

    let margin = (numOfActive - 1) * 9.5 + 'rem'

    const WrappedDiv = styled.div`
        position: absolute;
        width: 0.4rem;
        height: 20%;
        background: #21b24a;
        margin-top: ${margin};

        @media screen and (max-width: 700px) {
            display: none;
        }
    `

    return (
        <WrappedDiv />
    )
}

export default InstalledActiveLineDiv