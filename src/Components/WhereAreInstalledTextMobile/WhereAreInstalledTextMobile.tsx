import React from 'react'
import styled from 'styled-components'
import Button from '../../Components/Button/Button'

const WhereAreInstalledTextMobile:React.FC<{
    numOfActive: number,
    textNum: number,
    children?: React.ReactNode,
}> = ({numOfActive, textNum, children}) => {

    let display
    numOfActive !== textNum
    ? display = "display: none"
    : display = "display: block"

    const WrappedDiv = styled.div`
        display: none;

        @media screen and (max-width: 700px) {
            ${display};
            font-size: 3.2rem;
            font-size: 400;
            font-family: 'Gilroy', sans-serif;
            border: 1px solid #21B24A;
            border-top: 0;
            padding: 4rem;
        }
    `

    let text
    numOfActive === 1
    ? text = `Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно
    устоявшегося принципа – производить тщательный отбор специалистов на
    любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют
    работу в срок и должным образом.`
    : numOfActive === 2
    ? text = `Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно
    устоявшегося принципа – производить тщательный отбор специалистов на
    любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют
    работу в срок и должным образом.`
    : numOfActive === 3
    ? text = `Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно
    устоявшегося принципа – производить тщательный отбор специалистов на
    любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют
    работу в срок и должным образом.`
    : numOfActive === 4
    ? text = `Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно
    устоявшегося принципа – производить тщательный отбор специалистов на
    любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют
    работу в срок и должным образом.`
    : text = `Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно
    устоявшегося принципа – производить тщательный отбор специалистов на
    любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют
    работу в срок и должным образом.`

    return (
        <>
            <WrappedDiv>
                {children}
                {text}
                <Button btnType={'WhereAreInstalled'}>
                    Подробнее
                </Button>
            </WrappedDiv>
        </>
    )
}

export default WhereAreInstalledTextMobile