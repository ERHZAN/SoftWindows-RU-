import React from 'react'
import styled from 'styled-components'

const WhereAreInstalledBtn: React.FC<{
    children?: React.ReactNode,
    active: number,
    setActive: any,
    btnNum: number,
}> = ({children, active, setActive, btnNum}) => {

    let border
    active < btnNum
    ? border = 'border-top: 0'
    : active > btnNum
    ? border = 'border-bottom: 0'
    : border = 'null'

    const WrappedText = styled.div`
        font-family: 'Gilroy', sans-serif;
        font-size: 2.5rem;
        line-height: 2.4rem;
        font-weight: 400;
        color: #989898;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;

        @media screen and (max-width: 700px) {
            font-size: 4rem;
            line-height: 120%;
            border: 1px solid #989898;
            ${border};

            > p {
                margin-left: 4rem;
                display: flex;
                justify-content: space-between;

                > span:last-of-type {
                    position: relative;
                    display: inline;
                    ::before {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 30%;
                        width: 0;
                        height: 0;
                        border-left: 2rem solid transparent;
                        border-right: 2rem solid transparent;
                        border-top: 2.6rem solid #989898;
                        margin-right: 3rem;
                    }
                }
            }
        }
    `
    const WrappedActiveText = styled.div`
        font-family: 'Gilroy', sans-serif;
        font-size: 2.5rem;
        line-height: 2.4rem;
        font-weight: 400;
        color: #21B24A;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;

        @media screen and (max-width: 700px) {
            font-size: 4rem;
            line-height: 120%;
            border: 2px solid #21B24A;
            background-color: #21B24A;
            color: #fff;
            ${border};

            > p {
                margin-left: 4rem;
                display: flex;
                justify-content: space-between;

                > span:last-of-type {
                    position: relative;
                    display: inline;
                    ::before {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 30%;
                        width: 0;
                        height: 0;
                        border-left: 2rem solid transparent;
                        border-right: 2rem solid transparent;
                        border-bottom: 2.6rem solid #fff;
                        margin-right: 3rem;
                    }
                }
            }
        }
    `

    return (
        active === btnNum
        ? <WrappedActiveText onClick={() => {setActive(btnNum)}}>
            <p><span>
                {children}
            </span><span/></p>
            </WrappedActiveText>
        :  <WrappedText onClick={() => {setActive(btnNum)}}>
            <p><span>
                {children}
            </span><span/></p>
            </WrappedText>
    )
}

export default React.memo(
    WhereAreInstalledBtn,
    (prevProps, nextProps) => {
        return prevProps.active !== nextProps.active
        ? false
        : true
    }
)