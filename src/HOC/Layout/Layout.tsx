import Header from '../../Pages/Header/Header'
import Footer from '../../Pages/Footer/Footer'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Cursor from '../../Imgs/Cursor/Cursor.svg'
import React from 'react'

const WrappedLayout = styled.main`
`

class Layout extends React.Component<
{
    children?: React.ReactNode
},
{
    isScrollEnabled: boolean
}
> {

    constructor (props: Object) {
        super(props)
        this.state = {
            isScrollEnabled: true,
        }
    }

    render() {

        let scrollCondition

        this.state.isScrollEnabled === true
        ? scrollCondition = 'overflow: visible'
        : scrollCondition = 'overflow: hidden'

        const GlobalStyle = createGlobalStyle`
            *,
            *::before,
            *::after {
                box-sizing: border-box;
                cursor: url(${Cursor}), pointer;
                margin: 0;
                padding: 0;
            }
        
            button {
                cursor: url(${Cursor}), pointer;
            }
        
            a {
                cursor: url(${Cursor}), pointer;
            }
        
            html {
                font-size: 10px
            }
        
            body {
                position: relative;
                background-color: #E5E5E5;
                ${scrollCondition}
            }
        
            @media screen and (max-width: 700px) {
                html {
                    font-size: 5px;
                }
            }
        `


        return (
            <>
                <GlobalStyle />
                <Header />
                <WrappedLayout>
                    { this.props.children }
                </WrappedLayout>
                <Footer />
            </>
        )
    }
}

export default Layout