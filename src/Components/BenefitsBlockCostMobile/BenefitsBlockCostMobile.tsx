import React from 'react'
import styled from 'styled-components'

const font = '"Gilroy", sans-serif'

const WhiteLine = styled.div`
    color: #151515;
    font-family: ${font};
    font-weight: 600;
    font-size: 4rem;
    line-height: 130%;
    padding: 2.5rem 4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 700px) {
        display: none;
    }
`
const DarkLine = styled.div`
    color: #151515;
    font-family: ${font};
    font-weight: 600;
    font-size: 4rem;
    line-height: 130%;
    padding: 2.5rem 4rem;
    background: #EFF1F4;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 700px) {
        display: none;
    }
`
const WrappedSpan = styled.span`
    font-weight: 400;
`

interface Props {
    benefitsCost: Array<string>,
    benefitsTextNum: number,
    active: number,
}

export default React.memo(
    function BeneftisBlockCostMobile ({benefitsCost, benefitsTextNum, active}: Props) {
        return (
                active === benefitsTextNum ?
                <>
                    <WhiteLine>
                        <span>Стандарт</span>
                        <WrappedSpan>
                            {benefitsCost[0]}
                            <sup>2</sup>
                        </WrappedSpan>
                    </WhiteLine>
                    <DarkLine>
                        <span>Премимум</span>
                        <WrappedSpan>
                            {benefitsCost[1]}
                            <sup>2</sup>
                        </WrappedSpan>
                    </DarkLine>
                    <WhiteLine>
                        <span>Люкс</span>
                        <WrappedSpan>
                            {benefitsCost[2]}
                            <sup>2</sup>
                        </WrappedSpan>
                    </WhiteLine>
                    <DarkLine>
                        <span>Под ключ</span>
                        <WrappedSpan>
                            {benefitsCost[3]}
                            <sup>2</sup>
                        </WrappedSpan>
                    </DarkLine>
                </>
                : null
        )
    }
)