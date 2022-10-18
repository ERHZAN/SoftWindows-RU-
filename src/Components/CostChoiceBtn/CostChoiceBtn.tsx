import React from 'react'
import styled from 'styled-components'

interface Props {
    children?: React.ReactNode,
    active: number,
    setActive: any,
    btnNum: number
}

export default React.memo(
    function CostChoiceBtn ({children, active, setActive, btnNum}: Props) {

        let border
        active < btnNum
        ? border = 'border-top: 0'
        : active > btnNum
        ? border = 'border-bottom: 0'
        : border = 'null'

        const WrappedSpanActive = styled.span`
            color: #21B24A;
            font-weight: 600;
            position: relative;
            text-align: center;

            ::after {
                content: '';
                position: absolute;
                bottom: -1.5rem;
                left: -7.5%;
                height: 0.4rem;
                width: 115%;
                background: #21B24A;
            }

            @media screen and (max-width: 700px) {
                border: 1px solid #21B24A;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: #21B24A;
                color: #fff;
                ${border};

                ::after {
                    display: none;
                }

                > p {
                    display: flex;
                    justify-content: space-between;
                    padding-left: 4rem;
                    line-height: 4.8rem;
                    padding-top: 3.6rem;
                    padding-bottom: 3.6rem;

                    > span:first-of-type {
                        max-width: 49rem;
                    }

                    > span:last-of-type {
                        position: relative;
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
        const WrappedSpan = styled.span`
            color: #989898;
            font-weight: 400;
            text-align: center;

            :hover {
                color: #757575;
            }

            @media screen and (max-width: 700px) {
                border: 1px solid #989898;
                display: flex;
                flex-direction: column;
                justify-content: center;
                ${border};

                > p {
                    display: flex;
                    justify-content: space-between;
                    padding-left: 4rem;
                    line-height: 4.8rem;
                    padding-top: 3.6rem;
                    padding-bottom: 3.6rem;

                    > span:first-of-type {
                        max-width: 49rem;
                    }

                    > span:last-of-type {
                        position: relative;
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

        return (
            active === btnNum
                ? <WrappedSpanActive onClick={() => setActive(btnNum)}>
                    {children}
                </WrappedSpanActive>
                : <WrappedSpan onClick={() => setActive(btnNum)}>
                    {children}
                </WrappedSpan>
        )
    },
    (prevProps, nextProps) => {
        return prevProps.active !== nextProps.active
        ? false
        : true
    }
)