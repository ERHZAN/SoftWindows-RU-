import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import styled from 'styled-components'
import Logo from '../../Imgs/Logo.svg'
import HeaderLinkButton from '../../Components/HeaderLinkButton/HeaderLinkButton'
import PhoneImg from '../../Imgs/PhoneImg.svg'
import HeaderTelLink from '../../Components/HeaderTelLink/HeaderTelLink'

const Header: React.FC = () => {

    const WrappedHeaderDiv = styled.header`
        width: 100%;
        height: 80px;
        background-color: #363636;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        @media screen and (max-width: 700px) {
            position: fixed;
        }
    `
    const HeaderFlexDiv = styled.div`
        padding-left: 15%;
        padding-right: 15%;
        display: flex;
        justify-content: space-between;
        height: 100%;
    `
    const HeaderLogoDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `
    const WrappedImage = styled.img`
        height: 55px;
        width: 55px;
        image-rendering: auto;
    `
    const WrappedHeaderButtons = styled.div`
        font-size: 1.8rem;
        line-height: 2.4rem;
        font-family: 'Gilroy', sans-serif;
        display: flex;
        
        @media screen and (max-width: 700px) {
            display: none;
        }
    `
    const HeaderPhoneButtonDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 700px) {
            display: none;
        }
    `
    const WrappedImg = styled.img`
        margin-right: 0.725rem;
    `
    const WrappedBurgerMenuDiv = styled.div`
        display: none;
        margin-top: auto;
        margin-bottom: auto;
        position: relative;

        @media screen and (max-width: 600px) {
            display: block;
        }
    `
    const MenuToggle = styled.input`
        opacity: 0;
        width: 40px;
        height: 40px;
        :checked ~ label > span {
            transform: rotate(45deg);
        }
        :checked ~ label > span::before {
            top: 0;
            transform: rotate(0);
        }
        :checked ~ label > span::after {
            top: 0;
            transform: rotate(90deg);
        }
    `
    const MenuBtn = styled.label`
        display: flex;
        align-items: center;
        position: absolute;
        top: 70%;
        left: 25%;
        width: 26px;
        height: 26px;
        z-index: 100;

        > span,
        > span::before {
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            content: '';
            top: -8px;
        }
        > span::after {
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            content: '';
            top: 8px;
        }
        > span,
        > span::before,
        > span::after {
            transition-duration: .25s;
        }
    `

    const showMenuMobileFunction = () => {
        if ( menuMobileRef.current !== undefined && menuMobileRef.current.style.left === '-100%' ) {
            document.body.style.overflow = 'hidden'
            menuMobileRef.current.style.left = '0'
        } else if ( menuMobileRef.current !== undefined && menuMobileRef.current.style.left === '0px' ) {
            document.body.style.overflow = 'visible'
            menuMobileRef.current.style.left = '-100%'
        }
    }

    const MenuMobile = styled.div`
        background-color: #464646;
        display: none;

        @media screen and (max-width: 700px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            width: 100%;
            position: fixed;
            transition: all .5s linear;
            top: 80px;
            left: -100%;
            z-index: 1;
        }
    `

    const DropList1: any = useRef()
    const burgerMenuMobile: any = useRef()
    const menuMobileRef: any = useRef()

    const closeDropList1 = () => {
        window.scrollTo(0, 0)
        DropList1.current.style.display = 'none'
        DropList1.current.style.maxHeight = 0
        DropList1.current.style.opacity = 0
    }

    const WrappedMobileMenuLinkDroplist = styled.div`
        margin-left: 2%;
        transition: all .5s linear;
    `

    const WrappedMobileMenuLinksDiv = styled.div`
        margin-left: 15%;
        font-family: 'Gilroy', sans-serif;
        font-size: 4.4rem;
        line-height: 130%;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 6rem;
        text-align: left;
    `
    const WrappedenuMobileText = styled.p`
        font-family: 'Gilroy', sans-serif;
        font-size: 4.4rem;
        line-height: 130%;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 6rem;
        text-align: left;
    `
    const WrappedenuMobileDroplistText = styled.p`
        font-family: 'Gilroy', sans-serif;
        font-size: 3.5rem;
        line-height: 130%;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 6rem;
        text-align: left;
    `
    const WrappedButton = styled.button`
        width: 100%;
        text-align: left;
        margin-bottom: 6rem;

        > span:first-child {
            margin-right: 1rem;
        }
    `

    let rotate
    DropList1.current !== undefined && DropList1.current.style.maxHeight === '0px'
    ? rotate = 'transform: rotate(45deg); -webkit-transform: rotate(45deg); margin-bottom: 1%;'
    : rotate = 'transform: rotate(-135deg); -webkit-transform: rotate(-135deg); margin-top: 1%;'

    const HeaderDroplistBtnArrow = styled.span`
        display: inline-block;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        padding: 3px;
        ${rotate}
    `

    return (
        <WrappedHeaderDiv>
            <HeaderFlexDiv>
                <HeaderLogoDiv>
                    <NavLink to={'/'}>
                        <WrappedImage src={Logo} alt='' />
                    </NavLink>
                </HeaderLogoDiv>
                <WrappedHeaderButtons>
                    <HeaderLinkButton
                        address={'/'}
                        hasDropList={true}
                        dropList={{
                            'Для беседок': '/for-alcoves',
                            'Для террас': '/',
                            'Для веранд': '/',
                            'Для кафе': '/'
                        }}
                    >
                        Мягкие окна
                    </HeaderLinkButton>
                    <HeaderLinkButton
                        address={'/'}
                        hasDropList={false}
                    >
                        Услуги
                    </HeaderLinkButton>
                    <HeaderLinkButton
                        address={'/'}
                        hasDropList={false}
                    >
                        Наши работы
                    </HeaderLinkButton>
                    <HeaderLinkButton
                        address={'/'}
                        hasDropList={false}
                    >
                        Стоимость
                    </HeaderLinkButton>
                    <HeaderLinkButton
                        address={'/'}
                        hasDropList={false}
                    >
                        О компании
                    </HeaderLinkButton>
                    <HeaderLinkButton
                        address={'/'}
                        hasDropList={false}
                    >
                        Контакты
                    </HeaderLinkButton>
                </WrappedHeaderButtons>
                <HeaderPhoneButtonDiv>
                    <HeaderTelLink
                        link={'tel: +74992772326'}
                    >
                        <WrappedImg src={PhoneImg} alt=''/>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <p style={{minWidth: '13rem'}}>+7 (499) 277 23 26</p>
                        </div>
                    </HeaderTelLink>
                </HeaderPhoneButtonDiv>
                <WrappedBurgerMenuDiv >
                    <MenuToggle
                        ref={burgerMenuMobile}
                        onChange={() => {
                            showMenuMobileFunction()
                        }}
                        id="menu__toggle"
                        type="checkbox"
                    />
                    <MenuBtn htmlFor="menu__toggle">
                        <span></span>
                    </MenuBtn>
                </WrappedBurgerMenuDiv>
            </HeaderFlexDiv>
            <MenuMobile ref={menuMobileRef} style={{left: '-100%'}}>
                <WrappedMobileMenuLinksDiv>
                    <WrappedButton
                        onClick={() => {
                            DropList1.current.style.display === 'none'
                            ? DropList1.current.style.display = 'block'
                            : DropList1.current.style.display = 'none'

                            DropList1.current.style.maxHeight === '0px'
                            ? DropList1.current.style.maxHeight = '100%'
                            : DropList1.current.style.maxHeight = 0
                    
                            DropList1.current.style.maxHeight === '100%'
                            ? DropList1.current.style.opacity = '1'
                            : DropList1.current.style.opacity = 0
                        }}
                    >
                        <span>Мягкие окна</span>
                        <HeaderDroplistBtnArrow />
                    </WrappedButton>
                    <WrappedMobileMenuLinkDroplist ref={DropList1} style={{display: 'none', opacity: 0, maxHeight: 0}}>
                        <WrappedMobileMenuLinkDroplist>
                            <NavLink to={'/for-alcoves'}>
                                <WrappedenuMobileDroplistText
                                    onClick={ () => {
                                        burgerMenuMobile.current.checked = false
                                        showMenuMobileFunction()
                                        closeDropList1()
                                    }}
                                >
                                    Для беседок
                                </WrappedenuMobileDroplistText>
                            </NavLink>
                            <NavLink to={'/'}>
                                <WrappedenuMobileDroplistText
                                    onClick={ () => {
                                        burgerMenuMobile.current.checked = false
                                        showMenuMobileFunction()
                                        closeDropList1()
                                    }}
                                >
                                    Для террас
                                </WrappedenuMobileDroplistText>
                            </NavLink>
                            <NavLink to={'/'}>
                                <WrappedenuMobileDroplistText
                                    onClick={ () => {
                                        burgerMenuMobile.current.checked = false
                                        showMenuMobileFunction()
                                        closeDropList1()
                                    }}
                                >
                                    Для веранд
                                </WrappedenuMobileDroplistText>
                            </NavLink>
                            <NavLink to={'/'}>
                                <WrappedenuMobileDroplistText
                                    onClick={ () => {
                                        burgerMenuMobile.current.checked = false
                                        showMenuMobileFunction()
                                        closeDropList1()
                                    }}
                                >
                                    Для кафе
                                </WrappedenuMobileDroplistText>
                            </NavLink>
                        </WrappedMobileMenuLinkDroplist>
                    </WrappedMobileMenuLinkDroplist>
                    <NavLink to={'/'}>
                        <WrappedenuMobileText
                            onClick={ () => {
                                burgerMenuMobile.current.checked = false
                                showMenuMobileFunction()
                                closeDropList1()
                            }}
                        >
                            Услуги
                        </WrappedenuMobileText>
                    </NavLink>
                    <NavLink to={'/'}>
                        <WrappedenuMobileText
                            onClick={ () => {
                                burgerMenuMobile.current.checked = false
                                showMenuMobileFunction()
                                closeDropList1()
                            }}
                        >
                            Наши работы
                        </WrappedenuMobileText>
                    </NavLink>
                    <NavLink to={'/'}>
                        <WrappedenuMobileText
                            onClick={ () => {
                                burgerMenuMobile.current.checked = false
                                showMenuMobileFunction()
                                closeDropList1()
                            }}
                        >
                            Стоимость
                        </WrappedenuMobileText>
                    </NavLink>
                    <NavLink to={'/'}>
                        <WrappedenuMobileText
                            onClick={ () => {
                                burgerMenuMobile.current.checked = false
                                showMenuMobileFunction()
                                closeDropList1()
                            }}
                        >
                            О компании
                        </WrappedenuMobileText>
                    </NavLink>
                    <NavLink to={'/'}>
                        <WrappedenuMobileText
                            onClick={ () => {
                                burgerMenuMobile.current.checked = false
                                showMenuMobileFunction()
                                closeDropList1()
                            }}
                        >
                            Контакты
                        </WrappedenuMobileText>
                    </NavLink>
                </WrappedMobileMenuLinksDiv>
            </MenuMobile>
        </WrappedHeaderDiv>
    )
}

export default Header