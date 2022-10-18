import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const WrappedFooterDiv = styled.footer`
    background-color: #35353C;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 10.6rem;
    padding-bottom: 2.5rem;

    > span {
        color: #FFFFFF;
        font-family: 'Gilroy', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        text-align: center;
        margin-top: 11.5rem;
        display: block;
        position: relative;
        
        ::after{
            content: '';
            height: 1px;
            width: 100%;
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            bottom: 400%;
            left: 0;

            @media screen and (max-width: 700px) {
                bottom: 200%;
            }
        }

        @media screen and (max-width: 700px) {
            font-size: 2.4rem;
            line-height: 194%;
            margin-bottom: 4rem;
        }
    }

    @media screen and (max-width: 700px) {
        padding-top: 11.2rem;
    }
`
const WrappedFooterFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    > ul:last-of-type {
        margin-right: 8rem;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;

        > :not(ul:first-of-type) {
            margin-top: 8rem;
        }
    }
`
const WrappedFooterLogoText = styled.p`
    font-family: 'Gilroy', sans-serif;
    color: #fff;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 194.3%;
    
    @media screen and (max-width: 700px) {
        font-size: 3.6rem;
        line-height: 194%;
        margin-bottom: 6.6rem;
    }
`
const WrappedFooterUl = styled.ul`
    font-family: 'Gilroy', sans-serif;
    color: #fff;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 130%;
    > li {
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 220%;
        color: #A9A9A9;

        @media screen and (max-width: 700px) {
            font-size: 3.2rem;
        }
    }
    li:first-child {
        margin-top: 3.3rem;
    }

    @media screen and (max-width: 700px) {
        font-size: 4.4rem;
        line-height: 130%;
    }
`

const Footer = () => {
    return (
        <WrappedFooterDiv>
            <WrappedFooterFlexDiv>
                <WrappedFooterLogoText>
                    Logotype
                </WrappedFooterLogoText>
                <WrappedFooterUl>
                    Компания
                    <li>
                        <NavLink
                            to={'/'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            Стоимость
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            О нас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            Блог
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            Контакты
                        </NavLink>
                    </li>
                </WrappedFooterUl>
                <WrappedFooterUl>
                    Мягкие окна
                    <li>
                        <NavLink
                            to={'/for-alcoves'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            Для беседок
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            Для террас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            Для веранд
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                            onClick={() => { window.scrollTo(0, 0)}}
                        >
                            Для кафе
                        </NavLink>
                    </li>
                </WrappedFooterUl>
                <WrappedFooterUl>
                    Контакты
                    <li>г. Москва, Илимская улица, 1Бс11</li>
                    <li><a href={'tel: +74992772326'}>+7 (499) 277 23 26</a></li>
                    <li>okna@myagok.ru</li>
                    <li>Пн. - Пт. 11:00 - 19:00 Сб. - Вс. Выходной</li>
                </WrappedFooterUl>
            </WrappedFooterFlexDiv>
            <span>
                © 2020 — Все права защищены.
            </span>
        </WrappedFooterDiv>
    )
}

export default Footer