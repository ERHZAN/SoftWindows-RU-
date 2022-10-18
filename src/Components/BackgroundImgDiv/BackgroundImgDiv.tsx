import React from 'react'
import styled from 'styled-components'
import Image1 from '../../Imgs/HomePage/WhereAreInstalled/1.jpg'
import Image2 from '../../Imgs/HomePage/WhereAreInstalled/2.jpg'
import Image3 from '../../Imgs/HomePage/WhereAreInstalled/3.jpg'
import Image4 from '../../Imgs/HomePage/WhereAreInstalled/4.jpg'
import Image5 from '../../Imgs/HomePage/WhereAreInstalled/5.jpg'

const BackgroundImgDiv: React.FC<{
    active: number,
    mobile: boolean,
}> = ({active, mobile}) => {

    let Image
    active === 1
    ? Image = Image1
    : active === 2
    ? Image = Image2
    : active === 3
    ? Image = Image3
    : active === 4
    ? Image = Image4
    : Image = Image5

    let display

    mobile
    ? display = "display: block"
    : display = "display: none"

    const WrappedDiv = styled.div`
        width: 45vw;
        height: 45rem;
        background: url(${Image}) center/cover no-repeat;

        @media screen and (max-width: 700px) {
            ${display};
            width: 100%;
            min-height: 10rem;
            margin-bottom: 4rem;
        }
    `

    return (
        <WrappedDiv>

        </WrappedDiv>
    )
}

export default React.memo(
    BackgroundImgDiv,
    (prevProps, nextProps) => {
        return prevProps.active !== nextProps.active
        ? false
        : true
    }
)