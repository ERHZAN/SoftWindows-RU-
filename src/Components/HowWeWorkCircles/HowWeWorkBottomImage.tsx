import styled from 'styled-components'
import Image1 from '../../Imgs/HowWeWork/1.jpg'
import Image2 from '../../Imgs/HowWeWork/2.jpg'
import Image3 from '../../Imgs/HowWeWork/3.jpg'
import Image4 from '../../Imgs/HowWeWork/4.jpg'
import Image5 from '../../Imgs/HowWeWork/5.jpg'

const WrappedDiv = styled.div`
    position: relative;
`
const WrappedImg = styled.img`
    width: 80%;
    height: 100%;
    margin-left: 20%;

    @media screen and (max-width: 700px) {
        width: 100%;
        height: 100%;
        margin-left: 0;
    }
`

const HowWeWorkBottomImage: React.FC<{
    children?: React.ReactNode,
    active: number,
}> = ({children, active}) => {

    const currentImg = active === 1 ? Image1
    : active === 2 ? Image2
    : active === 3 ? Image3
    : active === 4 ? Image4 : Image5

    return (
        <WrappedDiv>
            <WrappedImg src={currentImg} />
            {children}
        </WrappedDiv>
    )
}

export default HowWeWorkBottomImage