import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const WrappedArticleDiv = styled.div`
    width: 32%;

    @media screen and (max-width: 700px) {
        width: 100%;
        height: 100%;
        margin-bottom: 5rem;
    }
`
const WrappedParagraph = styled.p`
    font-family: 'Gilroy', sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 130%;
    color: #151515;
    margin-top: 2.3rem;
    margin-left: 1.6rem;
    max-width: 30.5rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 700px) {
        font-size: 4rem;
        line-height: 130%;
        max-width: 100%;
        margin-bottom: 3rem;
    }
`
const WrappedBottomLink = styled(NavLink)`
    font-family: 'Gilroy', sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 150%;
    color: #21B24A;
    left: 1.6rem;
    bottom: 0.2rem;
    margin-left: 1.6rem;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 150%;
        position: relative;
        margin-left: 0;
    }
`

const OurWorkBottomArticles: React.FC<{
    image: any,
    text: string,
    link: string,
}> = ({image, text, link}) => {

    return (
        <WrappedArticleDiv>
            <img src={image} alt='' />
            <WrappedParagraph>
                {text}
            </WrappedParagraph>
            <WrappedBottomLink to={link}>
                Подробнее
            </WrappedBottomLink>
        </WrappedArticleDiv>
    )
}

export default OurWorkBottomArticles