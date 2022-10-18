import styled from 'styled-components'
import quotes from '../../Imgs/OurWork/quotes.svg'

const Text = styled.p`
    font-family: 'Gilroy', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 144%;
    color: #5B5B5B;
    margin-bottom: 5.3%;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 162%;
    }
`
const Name = styled.h3`
    font-family: 'Gilroy', sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 130%;
    color: #151515;

    @media screen and (max-width: 700px) {
        font-size: 4rem;
        line-height: 130%;
    }
`
const WrappedQuotesImgFlexDiv = styled.div`
    display: flex;
    margin-bottom: 3.7%;
`
const WrappedImgQuotes = styled.img`
    display: inline;
    width: 3.2%;

    @media screen and (max-width: 700px) {
        width: 5.5%;
    }
`

const Review: React.FC<{
    text: string,
    name: string,
    second?: boolean,
}> = ({text, name, second}) => {

    const WrappedReviewDiv = styled.div`
        width: 48.5%;
        min-height: 29.7rem;
        padding: 3%;
        background: #fff;

        @media screen and (max-width: 700px) {
            width: 100%;
            padding: 5rem;
            ${
                second === true
                ? 'display: none;'
                : 'display: block;'
            }
        }
    `

    return (
        <WrappedReviewDiv>
            <WrappedQuotesImgFlexDiv>
                <WrappedImgQuotes src={quotes} />
                <WrappedImgQuotes src={quotes} />
            </WrappedQuotesImgFlexDiv>
            <Text>
                {text}
            </Text>
            <Name>
                {name}
            </Name>
        </WrappedReviewDiv>
    )
}

export default Review