import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type dropListObj = {
    [key: string]: string
}

const HeaderButtonDiv = styled.div`
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    transition: background-color .2s linear;
    :hover {
        background-color: #21B24A;
    }
    :hover > div {
        display: flex;
        opacity: 1;
    }
    :hover span {
        display: inline-block;
    }
`
const DropListLink = styled(NavLink)`
    transition: color .2s linear;
    :hover {
        color: #21B24A;
        background-color: #F8F8F8;
    }
`
const DropListDiv = styled.div`
    display: none;
    opacity: 0;
    flex-direction: column;
    position: absolute;
    bottom: -21.6rem;
    width: 30rem;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 14.0436px 28.0873px rgba(154, 170, 207, 0.15);
    color: #151515;
    transition: opacity .5s linear;
`
const HeaderBtnArrow = styled.span`
    display: none;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    padding: 3px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    margin-left: 0.6rem;
`

interface Props {
    address: string,
    children: string,
    hasDropList: boolean,
    dropList?: dropListObj
}

export default React.memo(
    function HeaderLinkButton ({address, children, hasDropList, dropList}: Props) {

        const [displayArrow, setDisplayArrow] = useState('none')
    
        return (
            <HeaderButtonDiv
                onMouseOver={() => {
                    if (hasDropList) {
                        setDisplayArrow('inline-block')
                    }
                }}
                onMouseOut={() => {
                    if (displayArrow === 'inline') {
                        setDisplayArrow('none')
                    }
                }}
            >
                <NavLink
                    to={address}
                >
                    {children}
                    {
                        dropList
                        ? <HeaderBtnArrow />
                        : null
                    }
                </NavLink>
                <DropListDiv>
                    { dropList
                        ? Object.keys(dropList).map<React.ReactNode>((text: string, index: number) => {
                            return (
                                <DropListLink to={dropList[text]} style={{paddingLeft: '2.1rem', paddingTop: '1.5rem', paddingBottom: '1.5rem'}} key={index}>
                                    { text }
                                </DropListLink>
                            )
                        })
                        : null
                    }
                </DropListDiv>
            </HeaderButtonDiv>
        )
    },
    () => {
        return true
    }
)