import React from 'react'
import styled from 'styled-components'

const Button: React.FC<{
    children?: React.ReactNode,
    btnType: string,
    Type?: "button" | "submit" | "reset" | undefined,
}> = ({children, btnType, Type}) => {

    let WrappedButton = styled.button``
    if (btnType === 'HomeTop') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            background-color: #21B24A;
            font-size: 1.6rem;
            color: #fff;
            font-weight: 600;
            line-height: 0;
            padding-left: 4.2rem;
            padding-right: 4.2rem;
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;

            @media screen and (max-width: 700px) {
                padding-top: 6rem;
                padding-bottom: 6rem;
                font-size: 3.2rem;
                width: 100%;
            }
        `
    } else if (btnType === 'WorkerBlockButton') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            background-color: #21B24A;
            font-size: 1.6rem;
            color: #fff;
            font-weight: 600;
            line-height: 0;
            padding-left: 6.7rem;
            padding-right: 6.7rem;
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;

            @media screen and (max-width: 700px) {
                padding-top: 6rem;
                padding-bottom: 6rem;
                font-size: 3.2rem;
                width: 100%;
            }
        `
    } else if (btnType === 'WhereAreInstalled') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            background-color: #21B24A;
            font-size: 1.6rem;
            color: #fff;
            font-weight: 600;
            line-height: 0;
            padding-left: 5.8rem;
            padding-right: 5.8rem;
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;

            @media screen and (max-width: 700px) {
                padding-top: 6rem;
                padding-bottom: 6rem;
                font-size: 3.2rem;
                width: 100%;
                margin-top: 4rem;
            }
        `
    } else if (btnType === 'HomeSoftWindows') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            font-size: 1.6rem;
            color: #21B24A;
            font-weight: 600;
            line-height: 150%;
            padding-left: 23%;
            padding-right: 23%;
            padding-top: 5.5%;
            padding-bottom: 5.5%;
            outline: 1px solid #21B24A;
            margin: 0 auto;
            transition: background-color .3s linear;
            white-space: nowrap;
            :hover {
                background: #21B24A;
                color: #fff;
            }

            @media screen and (max-width: 1300px) {
                white-space: normal;
                padding-top: 6%;
                padding-bottom: 6%;
                padding-left: 14%;
                padding-right: 14%;
            }

            @media screen and (max-width: 700px) {
                font-size: 3.2rem;
            }
        `
    } else if (btnType === 'ThirdBlockForm') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            background-color: #21B24A;
            font-size: 1.6rem;
            color: #fff;
            font-weight: 600;
            line-height: 0;
            min-height: 50px;
            padding-top: 6%;
            padding-bottom: 6%;
            width: 50%;

            @media screen and (max-width: 1300px) {
                width: 100%;
            }

            @media screen and (max-width: 700px) {
                font-size: 3.2rem;
                margin-bottom: 8rem;
            }
        `
    } else if (btnType === 'MakeOrder') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            color: #21B24A;
            font-size: 1.6rem;
            line-height: 2.4rem;
            font-weight: 600;
            border: 0.2rem solid #21B24A;
            padding: 2.3rem 5.3rem;
            margin-top: 5rem;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            
            @media screen and (max-width: 700px) {
                border: 0.4rem solid #21B24A;
                font-size: 3.2rem;
                width: 100%;
                padding: 3.6rem 0;

                > span {
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        `
    } else if (btnType === 'Empty') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            color: #fff;
            font-size: 1.6rem;
            line-height: 2.4rem;
            font-weight: 600;
            margin-top: 4rem;
        `
    } else if (btnType === 'BottomForm') {
        WrappedButton = styled.button`
            font-family: 'Gilroy', sans-serif;
            background-color: #21B24A;
            font-size: 1.6rem;
            color: #fff;
            font-weight: 600;
            line-height: 150%;
            padding: 1.8rem;
            width: 100%;
            margin-top: 2.3rem;

            @media screen and (max-width: 700px) {
                font-size: 3.2rem;
                line-height: 150%;
                padding: 3.6rem;
            }
        `
    }

    return (
        <WrappedButton type={Type}>
            <span>
                {children}
            </span>
        </WrappedButton>
    )
}

export default React.memo(
    Button,
    () => {
        return true
    }
)