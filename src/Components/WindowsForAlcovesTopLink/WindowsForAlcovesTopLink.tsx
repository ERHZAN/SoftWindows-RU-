import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const WindowsForAlcovesTopLink: React.FC<{
    children?: React.ReactNode,
    link: string,
    current: boolean
}> = ({children, link, current}) => {

    let fontWeight
    current
    ? fontWeight = 600
    : fontWeight = 400

    let fontColor
    current
    ? fontColor = '#21B24A'
    : fontColor = '#5B5B5B'

    const WrappedLink = styled(NavLink)`
        font-family: 'Gilroy', sans-serif;
        font-size: 1.8rem;
        line-height: 144%;
        font-weight: ${fontWeight};
        color: ${fontColor};

        @media screen and (max-width: 700px) {
            font-size: 2.8rem;
            line-height: 186%;
        }
    `


    return (
        <WrappedLink to={link}>
            {children}
        </WrappedLink>
    )
}

export default WindowsForAlcovesTopLink