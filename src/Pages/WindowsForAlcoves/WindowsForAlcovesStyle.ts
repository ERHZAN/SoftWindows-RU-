import styled from 'styled-components'
import TopDivBg from '../../Imgs/WindowsForAlcoves/TopDivBg.jpg'
import TopBgMobile from '../../Imgs/WindowsForAlcoves/TopBgMobile.jpg'
import OurWorksBottomBackgroundImage from '../../Imgs/HomePage/WhereAreInstalled/1.jpg'

const font = '"Gilroy", sans-serif'

// Top - 'header' block
export const WrappedTopBlockDiv = styled.section`
    background: url(${TopDivBg}) center/cover;
    height: 42.8rem;
    margin-top: 8rem;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        background: url(${TopBgMobile}) center/cover;
        padding-left: 0;
        padding-right: 0;
        min-height: 98.6rem;
        margin-top: 15rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 5rem auto 0;
            width: 85%;
        }
    }
`
export const TopBlockLinks = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 30%;
    padding-top: 4rem;   

    @media screen and (max-width: 700px) {
        max-width: 100%;
    }
`
export const WrappedSpanTopBlock = styled.span`
    font-size: 1.8rem;

    @media screen and (max-width: 700px) {
        font-size: 2.8rem;
        max-width: 30%;
    }
`
export const TopBlockHeading = styled.h2`
    font-family: ${font};
    font-weight: 800;
    font-size: 5rem;
    line-height: 6.2rem;
    color: #3D3D3D;
    margin-top: 5rem;

    @media screen and (max-width: 700px) {
        font-size: 8rem;
        line-height: 8rem;
        color: #151515;
    }

    > p {
        color: #5B5B5B;
        font-size: 1.8rem;
        line-height: 144%;
        font-weight: 400;

        @media screen and (max-width: 700px) {
            font-size: 3.2rem;
        }
    }
    p:first-child {
        margin-top: 1.5rem;

        @media screen and (max-width: 700px) {
            margin-top: 2.8rem;
            line-height: 162%;
        }
    }
    p:last-child {
        margin-bottom: 7rem;
    }
`


// SoftWindowsCost block
export const SoftWindowsCostBlockDiv = styled.section`
    margin-top: 10rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding: 0;
    }

    > div:first-child {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            width: 85%;
            margin-top: 18rem;
        }
    }

    > div:not(:first-of-type) {
        @media screen and (max-width: 700px) {
            display: none;
        }
    }
`
export const SoftWindowsCostBlockHeading = styled.h2`
    font-family: ${font};
    font-weight: 800;
    font-size: 4.2rem;
    line-height: 7.5rem;
    color: #3D3D3D;
    margin-top: 5rem;
    text-align: center;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        bottom: -52%;
        left: 0;
        height: 0.4rem;
        width: 100%;
        background: #EAEDF4;

        @media screen and (max-width: 1100px) {
            bottom: -42%;
        }

        @media screen and (max-width: 700px) {
            display: none;
        }
    }

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        line-height: 8rem;
        color: #151515;
    }
`
export const SoftWindowsBlockChoice = styled.div`
    font-size: 2.5rem;
    line-height: 2.4rem;
    font-family: ${font};
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    padding-left: 10%;
    padding-right: 10%;

    @media screen and (max-width: 1700px) {
        padding-left: 5%;
        padding-right: 5%;
    }
    @media screen and (max-width: 1400px) {
        padding-left: 0;
        padding-right: 0;
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
        font-size: 4rem;
        line-height: 120%;
        margin-top: 7rem;
        margin-bottom: 7rem;
    }
`
export const SoftWindowsBlockWhiteLine = styled.div`
    color: #151515;
    font-family: ${font};
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 130%;
    padding: 2.5rem 4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const SoftWindowsBlockDarkLine = styled.div`
    color: #151515;
    font-family: ${font};
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 130%;
    padding: 2.5rem 4rem;
    background: #EFF1F4;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        display: none;
    }
`


// OurWorks block
export const OurWorksBlockDiv = styled.section`
    margin-top: 15rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding: 0;
        margin-top: 18rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            width: 85%;
            margin: 0 auto;
        }
    }
`
export const OurWorksBlockHeading = styled.h2`
    font-family: ${font};
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.2rem;
    color: #463B3B;
    text-align: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        line-height: 8rem;
        color: #151515;
    }
`
export const OurWorksBlockFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    position: relative;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`
export const OurWorksBlockArrowLeft = styled.div`
    border: solid #414141;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: .5rem;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    position: absolute;
    left: -3%;
    bottom: 50%;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const OurWorksBlockArrowRight = styled.div`
    border: solid #414141;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: .5rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    position: absolute;
    right: -4%;
    bottom: 50%;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const OurWorksBottomImgDiv = styled.div`
    position: absolute;
    left: 42%;
    top: 12.1rem;
    width: 56.7%;
    background: #fff;
    padding: 4.2rem 5.5rem;

    @media screen and (max-width: 700px) {
        left: -2.5%;
        top: 70%;
        width: 102.5%;
    }
`
export const OurWorksBottomImgText = styled.p`
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #5B5B5B;
    margin-bottom: 2rem;

    @media screen and (max-width: 700px) {
        font-size: 3.6rem;
        line-height: 144%;
    }
`
export const OurWorksBottomBackgroundImg = styled.div`
    width: 87rem;
    height: 45rem;
    background: url(${OurWorksBottomBackgroundImage}) center/cover no-repeat;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`


// Reviews block
export const ReviewsBlockDiv = styled.section`
    margin-top: 18.1rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
        margin-top: 130rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            width: 85%;
            margin: 0 auto;
        }
    }
`
export const ReviewsBlockHeading = styled.h2`
    font-family: ${font};
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.2rem;
    color: #463B3B;
    text-align: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        line-height: 8rem;
        color: #151515;
    }
`
export const ReviewsBottomFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    /* height: 30rem; */

    @media screen and (max-width: 700px) {
        display: block;
        min-height: 0;
    }
`
export const ReviewsArrowLeft = styled.div`
    border: solid #414141;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: .5rem;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    position: absolute;
    left: -4%;
    bottom: 50%;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const ReviewsArrowRight = styled.div`
    border: solid #414141;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: .5rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    position: absolute;
    right: -4%;
    bottom: 50%;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const ReviewsDotsFlexDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.6rem;
    margin-bottom: 15rem;

    @media screen and (max-width: 700px) {
        margin-top: 5rem;
    }
`


// SoftWindowsForAlcoves block
export const SoftWindowsForAlcovesBlockDiv = styled.section`
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
        margin-top: 18rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            width: 85%;
            margin: 0 auto;
        }
    }
`
export const SoftWindowsBlockFlex = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`
export const SoftWindowsBlockHeading = styled.h2`
    font-family: ${font};
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.2rem;
    color: #463B3B;
    text-align: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const SoftWindowsForAlcovesLeftBlock = styled.div`
    width: 48%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`
export const SoftWindowsForAlcovesRightBlock = styled.div`
    width: 48%;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const SoftWindowsForAlcovesText = styled.p`
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #5B5B5B;
    margin-top: 1.5rem;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 162%;
    }
`
export const SoftWindowsForAlcovesWrappedUl = styled.ul`
    list-style: disc;
    margin-left: 2rem;
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #5B5B5B;
    margin-top: 1.5rem;
`


// BottomForm block
export const BottomFormDiv = styled.section`
    margin-top: 15rem;
    display: flex;
    justify-content: space-between;
    padding-top: 13rem;
    padding-bottom: 6rem;
    background: #fff;
    min-height: 70rem;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding: 0;
    }

    > div {
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 700px) {
            margin: 30rem auto 0;
            width: 85%;
            flex-direction: column;
        }
    }
`
export const FormBlockLeftDiv = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 700px) {
        display: block;
        width: 100%;
    }
`
export const FormBlockHeading = styled.h2`
    font-family: ${font};
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.2rem;
    color: #463B3B;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        line-height: 8rem;
        color: #151515;
    }
`
export const FormBlockParagraph = styled.p`
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #5B5B5B;
    margin-top: 5rem;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 162%;
    }
`
export const WrappedForm = styled.form`
    background: #fff;
    width: 42.8%;
    min-height: 51.6rem;
    box-shadow: 0 .7rem 2.1rem rgba(154, 170, 207, 0.15);
    padding: 5rem;

    @media screen and (max-width: 700px) {
        width: 100%;
        margin-top: 6rem;
        margin-bottom: 12rem;
    }
`
export const WrappedLabel = styled.label`
    font-family: ${font};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 149.4%;
    color: #A5A5A5;
    margin-left: 1.5rem;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 149%;
    }
`
export const WrappedInput = styled.input`
    display: block;
    outline: none;
    border-bottom: .1rem #CECECE solid;
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: 3.5rem;
    font-family: ${font};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 149.4%;
    color: #5B5B5B;

    :focus {
        border-bottom: .1rem #21B24A solid;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
    }

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 149%;
    }
`
export const WrappedCheckboxLabel = styled.label`
    font-family: ${font};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 149.4%;
    color: #252525;
    margin-left: 1rem;

    @media screen and (max-width: 700px) {
        font-size: 2.8rem;
        line-height: 149%;
    }
`