import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// import tw from 'twin.macro'
import TopImage from '../../Imgs/HomePage/TopBackgroundImage.jpg'
import TopImageMobile from '../../Imgs/HomePage/TopBlockMobBack.jpg'
import listStyle from '../../Imgs/listStyle.svg'
import ThirdBlockBackground from '../../Imgs/HomePage/ThirdBlockBackground.jpg'
import WorkerBlockBackground from '../../Imgs/HomePage/WorkerBlock/WorkerBlockBackground.png'
import BottomFormBackground from '../../Imgs/BottomForm/BottomFormBackground.png'


const font = '"Gilroy", sans-serif'

// first - top block
export const TopBackgroundImageDiv = styled.section`
    width: 100%;
    min-height: 88rem;
    background: url(${TopImage}) center/cover no-repeat;
    padding-left: 15%;
    padding-right: 15%;
    margin-top: 30px;

    @media screen and (max-width: 700px) {
        background: url(${TopImageMobile}) center/cover no-repeat;
        margin-top: 47px;
        min-height: 560px;
        padding-left: 0;
        padding-right: 0;
    }
`
export const HomePageWrappedTopHeader = styled.h1`
    padding-top: 29rem;
    font-family: ${font};
    font-weight: 800;
    font-size: 6rem;
    line-height: 7.5rem;
    color: #3D3D3D;

    @media screen and (max-width: 700px) {
        margin-left: auto;
        margin-right: auto;
        padding-top: 29rem;
        font-size: 8rem;
        line-height: 10rem;
        max-width: 67rem;
    }
`
export const HomePageWrappedTopHeaderSpan = styled.span`
    font-weight: 700;
    color: #21B24A;
    display: block;
`
export const HomePageTopHeaderWrappedUl = styled.ul`
    list-style: url(${listStyle});
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    margin-bottom: 5rem;
    padding-left: 1.5%;

    > li {
        margin-top: 1.8rem;
    }

    @media screen and (max-width: 700px) {
        margin-top: 4rem;
        font-size: 3.2rem;
        line-height: 5rem;

        > li {
            margin-left: 3rem;
        }
    }
`

// second block - buy soft windows
export const HomePageBuySoftWindowsBlock = styled.section`
    font-family: ${font};
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
        margin-top: 11.4rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
        }
    }
`
export const WrappedBuySoftWindowsBlockHeading = styled.h2`
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.2rem;
    color: #463B3B;
    text-align: center;
    margin-top: 10rem;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        color: #151515;
    }
`
export const WrappedBuySoftWindowsBlockParagraph = styled.p`
    color: #5B5B5B;
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 400;
    text-align: center;
    max-width: 82rem;
    margin: 1.2rem auto 5rem;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 5.2rem;
        margin-top: 3rem;
        max-width: 67rem;
    }
`
export const WrappedCardsFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 9rem;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        max-width: 85%;
    }
`
export const WrappedCardDiv = styled.div`
    width: 32%;
    min-height: 50rem;
    background-color: #fff;
    font-family: ${font};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 4rem 0;
    flex: 0 1 31%;

    @media screen and (max-width: 700px) {
        width: 100%;
        margin: 0 auto 6rem;
        min-height: 70rem;
        min-height: 400px;
    }
`
export const WrappedCardFirstHeading = styled.h2`
    font-size: 2.5rem;
    line-height: 3.25rem;
    font-weight: 600;
    color: #151515;
    margin: 0 auto 4rem;
    position: relative;
    text-align: center;
    ::before {
        content: '';
        height: 0.2rem;
        width: 65%;
        background-color: #21B24A;
        position: absolute;
        bottom: -2rem;
        left: 18%;
    }

    @media screen and (max-width: 700px) {
        font-size: 4.6rem;
        margin-bottom: 6rem;

        ::before {
            height: 0.4rem;
            bottom: -4rem;
            width: 75%;
            left: 13%;
        }
    }
`
export const WrappedCardSecondHeading = styled.h3`
    font-size: 3rem;
    line-height: 3.9rem;
    font-weight: 600;
    color: #151515;
    margin: 0 auto 2.5rem;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 4rem;
        margin-bottom: 4rem;
    }
`
export const WrappedUlCard = styled.ul`
    width: 75%;
    list-style: url(${listStyle});
    list-style-position: inside;
    margin: 0 auto 2.5rem;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3rem;
    color: #5B5B5B;
    > li {
        line-height: 3rem;

        @media screen and (max-width: 700px) {
            line-height: 6rem;
        }
    }
    @media screen and (max-width: 1600px) {
        width: 70%;
    }

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        width: 85%;
        margin-bottom: 5rem;
    }
`

// third block
export const WrappedThirdBlockDiv = styled.section`
    background: url(${ThirdBlockBackground}) center/cover no-repeat;

    @media screen and (max-width: 700px) {
        margin-top: 8rem;
    }

    > div {
        width: 100%;
        min-height: 24.5rem;
        display: flex;
        justify-content: space-between;
        padding-left: 15%;
        padding-right: 15%;

        @media screen and (max-width: 700px) {
            width: 85%;
            padding-left: 0;
            padding-right: 0;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
        }
    }
`
export const WrappedThirdBlockParagraph = styled.p`
    font-family: ${font};
    font-size: 3.5rem;
    color: #151515;
    line-height: 4.55rem;
    font-weight: 600;
    margin: auto 0 auto;

    @media screen and (max-width: 700px) {
        font-size: 5rem;
        margin-top: 8rem;
    }
`
export const WrappedThirdBlockSpan = styled.span`
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: #5B5B5B;
    display: block;
    margin-top: 2rem;

    @media screen and (max-width: 700px) {
        margin-top: 3rem;
        font-size: 3.2rem;
    }
`
export const WrappedThirdBlockForm = styled.form`
    width: 45%;
    margin-right: 3.6rem;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
        margin-left: 3.6rem;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        margin-top: 4rem;
        margin-left: 0;
    }
`
export const WrappedThirdBlockInput = styled.input`
    width: 50%;
    min-width: 100px;
    min-height: 50px;
    padding-top: 4.3%;
    padding-bottom: 4.2%;
    font-size: 1.4rem;
    color: #868484;
    font-weight: 400;
    line-height: 2.1rem;
    outline: none;
    padding-left: 4%;
    padding-right: 4%;
    width: 50%;

    @media screen and (max-width: 1300px) {
        width: 100%;
    }

    @media screen and (max-width: 700px) {
        margin-bottom: 2rem;
        font-size: 2.8rem;
    }
`

// fourth - benefits block
export const BenefitsBlockDiv = styled.section`
    margin-bottom: 15.5rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0%;
        padding-right: 0%;
        margin-bottom: 10rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            max-width: 67rem;
        }
    }
`
export const BenefitsBlockHeadingTop = styled.h2`
    margin-top: 15.6rem;
    margin-bottom: 5rem;
    text-align: center;
    color: #463B3B;
    font-size: 4.2rem;
    line-height: 5.2rem;
    font-family: ${font};
    font-weight: 700;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        color: #151515;
    }
`
export const BenefitsBlockFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`
export const BenefitsBlockCard = styled.div`
    width: 32.5%;
    min-height: 26rem;
    background: #fff;
    padding: 3.8rem 0;

    @media screen and (max-width: 700px) {
        margin: 0 auto 6rem;
        width: 85%;
    }
`
export const BenefitsBlockCardImg = styled.img`
    margin-left: auto;
    margin-right: auto;
`
export const BenefitsBlockCardHeading = styled.h2`
    text-align: center;
    font-family: ${font};
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 130%;
    color: #151515;
    margin-top: 2rem;
    margin-bottom: 0.9rem;

    @media screen and (max-width: 700px) {
        font-size: 4rem;
    }
`
export const BenefitsBlockCardText = styled.p`
    text-align: center;
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 144%;
    color: #5B5B5B;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
    }
`
export const BenefitsBlockCostHeading = styled.h2`
    margin-top: 15.6rem;
    margin-bottom: 5rem;
    text-align: center;
    color: #463B3B;
    font-size: 4.2rem;
    line-height: 5.2rem;
    font-family: ${font};
    font-weight: 700;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        bottom: -171%;
        left: 0;
        height: 0.4rem;
        width: 100%;
        background: #EAEDF4;
    }

    @media screen and (max-width: 1100px) {
        ::before {
            bottom: -11.3rem;
        }
    }

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        margin-top: 12rem;
        margin-bottom: 7rem;
        color: #151515;

        ::before {
            display: none;
        }
    }
`
export const BenefitsBlockCostChoice = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    font-size: 2.5rem;
    line-height: 2.4rem;
    font-family: ${font};
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media screen and (max-width: 1700px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    @media screen and (max-width: 1400px) {
        padding-left: 0;
        padding-right: 0;
    }

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
        flex-direction: column;
        font-size: 4rem;
    }
`
export const BenefitsBlockCostWhiteLine = styled.div`
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
export const BenefitsBlockCostDarkLine = styled.div`
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

// fifth - worker block
export const WorkerBlockDiv = styled.section`
    width: 100%;
    min-height: 650px;
    background: url(${WorkerBlockBackground}) center/cover no-repeat;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 18rem;
    padding-bottom: 5%;

    @media screen and (max-width: 1300px) {
        min-height: 500px;
    }

    @media screen and (max-width: 1200px) {
        min-height: 400px;
    }

    @media screen and (max-width: 700px) {
        min-height: 113rem;
        padding: 34rem 0 19rem;
        > div {
            max-width: 85%;
            margin: 0 auto 0;
        }
    }
`
export const WorkerBlockHeading = styled.h2`
    color: #151515;
    font-family: ${font};
    font-size: 4.2rem;
    font-weight: 700;
    line-height: 5.2rem;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        color: #151515;
    }
`
export const WorkerBlockParapgraphDiv = styled.div`
    margin-top: 3rem;
    margin-bottom: 5rem;
    > p {
        color: #151515;
        font-family: ${font};
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.6rem;

        @media screen and (max-width: 700px) {
            display: inline;
            font-size: 3.2rem;
            line-height: 162%;
        }
    }
`

// sixth - where are installed block
export const WhereAreInstalledDiv = styled.section`
    margin-top: 15rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0%;
        padding-right: 0%;
        margin-top: 18rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            max-width: 67rem;
        }
    }
`
export const WhereAreInstalledHeading = styled.h2`
    font-family: ${font};
    font-size: 4.2rem;
    font-weight: 700;
    line-height: 5.2rem;
    color: #463B3B;
    text-align: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        line-height: 8rem;
        margin-bottom: 7rem;
        color: #151515;
    }
`
export const WhereAreInstalledFlex = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-left: 3.6rem;
    width: 100%;

    @media screen and (max-width: 700px) {
        margin-left: 0;
    }
`
export const InstalledLineDiv = styled.div`
    display: inline;
    background: #eaedf4;
    width: 0.4rem;
    position: relative;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const InstalledColumnFlex = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`
export const InstalledColumnFlexText = styled.p`
    font-family: ${font};
    font-size: 2.5rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: #989898;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
`
export const InstalledWhiteBlockTextDiv = styled.div`
    position: absolute;
    left: -22%;
    top: 33%;
    width: 75.6rem;
    min-height: 27.8rem;
    background: #fff;
    padding: 4.2rem 5.5rem;

    @media screen and (max-width: 1300px) {
        left: -10%;
        width: 60rem;
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const InstalledWhiteBlockText = styled.p`
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #5B5B5B;
    margin-bottom: 2rem;
`
export const WhereAreInstalledUnderBtnDiv = styled.div`
    display: none;

    @media screen and (max-width: 700px) {
        display: block;
    }
`

// seventh - mounting block
export const MountingBlockDiv = styled.section`
    background: #31313f;
    padding: 9.5rem 7.2rem;
    margin-left: 15%;
    margin-top: 15rem;

    @media screen and (max-width: 700px) {
        margin-left: 5%;
        padding: 13.4% 9%;
        margin-top: 18rem;
    }

    > div {
        display: flex;

        @media screen and (max-width: 700px) {
            max-width: 67rem;
            flex-direction: column;
        }
    }
`
export const MountingBlockTextDiv = styled.div`
    margin-top: 4.8%;
    margin-left: 5.9%;

    @media screen and (max-width: 700px) {
        margin: 0;

        > h3:first-of-type {
            margin-top: 6.6rem;
        }
    }
`
export const MountingBlockHeading = styled.h3`
font-family: ${font};
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.2rem;
    color: #fff;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        line-height: 6rem;
        display: inline;
    }
`
export const MountingBlockText = styled.ul`
    margin-top: 2.5rem;
    list-style: inside;
    list-style-position: inside;
    color: #fff;
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3.5rem;
    max-width: 69rem;
    margin-bottom: 4rem;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 162%;
        width: 95%;
        margin-top: 4rem;
    }
`
export const MountingBottomLink = styled(NavLink)`
    font-family: ${font};
    color: #fff;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 150%;
    }
`

// eighth - our materials block
export const OurMaterialBlockDiv = styled.section`
    margin-top: 10rem;
    padding-top: 5.6rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0%;
        padding-right: 0%;
        margin-top: 18rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            max-width: 67rem;
        }
    }
`
export const OurMaterialHeading = styled.h2`
    font-family: ${font};
    font-size: 4.2rem;
    font-weight: 700;
    line-height: 5.2rem;
    color: #463B3B;
    text-align: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        font-size: 6.4rem;
        line-height: 8rem;
        margin-bottom: 7rem;
        color: #151515;
    }
`
export const OurMaterialFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`
export const OurMaterialUnderImgText = styled.p`
    font-family: ${font};
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.12rem;
    margin-top: 2.6rem;
    margin-left: 2rem;

    @media screen and (max-width: 700px) {
        font-size: 5rem;
        line-height: 130%;
    }
`
export const OurMaterialUnderImgLink = styled(NavLink)`
    margin-top: 1.5rem;
    margin-left: 2rem;
    font-family: ${font};
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: #21B24A;

    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 150%;
    }
`

// Nineth - How we work block
export const HowWeWorkBlockDiv = styled.section`
    margin-top: 15rem;
    padding-left: 15%;
    padding-right: 15%;
    @media screen and (max-width: 700px) {
        padding-left: 0%;
        padding-right: 0%;
        margin-top: 18rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            max-width: 67rem;
        }
    }
`
export const HowWeWorkBlockHeading = styled.h2`
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
export const CirclesFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4.5rem;
    padding-left: 17%;
    padding-right: 17%;
    @media screen and (max-width: 1700px) {
        padding-left: 11%;
        padding-right: 11%;
    }
    @media screen and (max-width: 1650px) {
        padding-left: 6.7%;
        padding-right: 6.7%;
    }
    @media screen and (max-width: 1600px) {
        padding-left: 9.3%;
        padding-right: 9.3%;
    }
    @media screen and (max-width: 1500px) {
        padding-left: 4%;
        padding-right: 4%;
    }
    @media screen and (max-width: 1400px) {
        padding-left: 2.5%;
        padding-right: 2.5%;
    }
    @media screen and (max-width: 1300px) {
        padding-left: 0;
        padding-right: 0;
    }
    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const HowWeWorkBottomFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`
export const HowWeWorkBottomDotsFlexDiv = styled.div`
    display: none;
    justify-content: center;
    margin-top: 2.6rem;
    margin-bottom: 15rem;

    @media screen and (max-width: 700px) {
        display: flex;
    }
`
export const ArrowLeft = styled.div`
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
export const ArrowRight = styled.div`
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
export const HowWeWorkTextDiv = styled.div`
    background: #fff;
    min-width: 50rem;
    min-height: 28.5rem;
    padding: 7rem;
    position: relative;

    @media screen and (max-width: 700px) {
        width: 100%;
        min-height: 10rem;
        padding: 8rem;
        margin-bottom: 4.8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const HowWeWorkTextHeading = styled.h2`
    font-family: ${font};
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 130%;
    color: #151515;

    @media screen and (max-width: 700px) {
        font-size: 4.4rem;
        line-height: 130%;
    }
`
export const HowWeWorkTextParagraph = styled.p`
    margin-top: 1rem;
    font-family: ${font};
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 144%;
    color: #5B5B5B;
    max-width: 62rem;

    @media screen and (max-width: 700px) {
        margin-top: 2.4rem;
        font-size: 3.2rem;
        line-height: 162%;
    }
`

// Our works block
export const OurWorkBlockDiv = styled.section`
    margin-top: 15rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
        margin-top: 18rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            max-width: 67rem;
        }
    }
`
export const OurWorkHeading = styled.h2`
    font-family: ${font};
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.2rem;
    color: #463B3B;
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
    ::before {
        content: '';
        position: absolute;
        bottom: -8.9rem;
        left: 0;
        height: 0.4rem;
        width: 100%;
        background: #EAEDF4;

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
export const OurWorkTextFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 2.4rem;
    font-family: ${font};
    margin-bottom: 5.6rem;
    padding-left: 26%;
    padding-right: 26%;

    @media screen and (max-width: 1500px) {
        padding-left: 20%;
        padding-right: 20%;
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const OurWorkBottomFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    position: relative;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`
export const OurWorkArrowLeft = styled.div`
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
export const OurWorkArrowRight = styled.div`
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

// Reviews block
export const ReviewsBlockDiv = styled.section`
    margin-top: 15rem;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
        margin-top: 18rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            max-width: 67rem;
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
        color: #151515;
    }
`
export const ReviewsBottomFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 30rem;
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
`
export const ReviewBlockBottomTextFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`
export const ReviewsBottomTextLeftDiv = styled.div`
    width: 48%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`
export const ReviewsBottomTextRightDiv = styled.div`
    width: 48%;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const ReviewBlockBottomText = styled.p`
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
export const WrappedReviewBottomTextUl = styled.ul`
    list-style: disc;
    list-style-position: inside;
    font-family: ${font};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #5B5B5B;
    margin-top: 1.5rem;
`

// Form block
export const FormBlockDiv = styled.section`
    margin-top: 15rem;
    background: url(${BottomFormBackground}) center / cover;
    min-height: 70rem;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
    }

    > div {
        display: flex;
        justify-content: space-between;
        padding-top: 27rem;
        padding-bottom: 12rem;
    }

    > div {
        @media screen and (max-width: 700px) {
            margin: 0 auto;
            max-width: 67rem;
            display: flex;
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
        line-height: 150%;
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
        line-height: 150%;
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
        line-height: 150%;
    }
`