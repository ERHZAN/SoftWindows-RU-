import styled from 'styled-components'
import inactiveDot from '../../Imgs/Reviews/inactiveDot.svg'
import activeDot from '../../Imgs/Reviews/activeDot.svg'
import previousDot from '../../Imgs/Reviews/previousDot.svg'


const ReviewsBottomDots: React.FC<{
    reviewsCurrent: number,
    currentDot: number,
    onClick: any,
}> = ({reviewsCurrent, currentDot, onClick}) => {

    let properties: Array<string | string> = []
    reviewsCurrent === currentDot
    ? properties = ['3.3rem', '.8rem']
    : reviewsCurrent > currentDot
    ? properties = ['.8rem', '.8rem']
    : properties = ['.9rem', '.8rem']

    let propertiesMobile: Array<string | string> = []
    reviewsCurrent === currentDot
    ? properties = ['6.6rem', '1.6rem']
    : reviewsCurrent > currentDot
    ? properties = ['1.6rem', '1.6rem']
    : properties = ['1.8rem', '1.6rem']

    const WrappedImg = styled.img`
        margin-right: 0.6rem;
        max-width: ${properties[0]};
        max-height: ${properties[1]};

        @media screen and (max-width: 700px) {
            margin-right: 1.2rem;
            max-width: ${propertiesMobile[0]};
            max-height: ${propertiesMobile[1]};
        }
    `

    return (
        <>
        {
            reviewsCurrent === currentDot
            ? <WrappedImg onClick={onClick} src={activeDot}/>
            : reviewsCurrent > currentDot
            ? <WrappedImg onClick={onClick} src={previousDot}/>
            : <WrappedImg onClick={onClick} src={inactiveDot}/>
        }
        </>
    )
}

export default ReviewsBottomDots