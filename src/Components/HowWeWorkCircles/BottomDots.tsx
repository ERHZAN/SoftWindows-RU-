import styled from 'styled-components'
import inactiveDot from '../../Imgs/Reviews/inactiveDot.svg'
import activeDot from '../../Imgs/Reviews/activeDot.svg'
import previousDot from '../../Imgs/Reviews/previousDot.svg'


const HowWeWorkBottomDots: React.FC<{
    currentWork: number,
    currentDot: number,
    onClick: any,
}> = ({currentWork, currentDot, onClick}) => {

    let properties = []
    currentWork === currentDot
    ? properties = ['6.6rem', '1.6rem']
    : currentWork > currentDot
    ? properties = ['1.6rem', '1.6rem']
    : properties = ['1.8rem', '1.6rem']

    const WrappedImg = styled.img`
        margin-right: 1.2rem;
        width: ${properties[0]};
        height: ${properties[1]};
    `

    return (
        <>
        {
            currentWork === currentDot
            ? <WrappedImg onClick={onClick} src={activeDot}/>
            : currentWork > currentDot
            ? <WrappedImg onClick={onClick} src={previousDot}/>
            : <WrappedImg onClick={onClick} src={inactiveDot}/>
        }
        </>
    )
}

export default HowWeWorkBottomDots