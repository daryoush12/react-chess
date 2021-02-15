import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { HiMenu } from 'react-icons/hi'
import Slide from 'react-reveal/Slide'

const NavBar = styled.div`
    width: 100%;
    height: 50px;
    background-color: #000000;
    color: white;
`

const NavButton = styled.div`
    border: none;
    background-color: transparent;
    color: white;
`

const SideBar = styled.div`
    height: 95vh;
    width: 30vw;
    background-color: #000000;

    @media only screen and (min-width: 200px) {
        height: 95vh;
        width: 55vw;
        background-color: #000000;
    }

    @media only screen and (min-width: 478px) {
        height: 95vh;
        width: 50vw;
        background-color: #000000;
    }

    @media only screen and (min-width: 900px) {
        height: 95vh;
        width: 50vw;
        background-color: #000000;
    }
`

const Text = styled.span`
    color: white;
    width: 100%;
    text-align: left;
    font-size: 1.5em;
`

export default function Default({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)',
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    function openSidebar(e) {
        e.preventDefault()
        if (sidebarOpen) setSidebarOpen(false)
        else setSidebarOpen(true)
    }

    return (
        <div>
            {isDesktopOrLaptop && <NavBar></NavBar>}
            {isTabletOrMobile && (
                <>
                    <NavBar>
                        <NavButton onClick={openSidebar}>
                            <HiMenu style={{ width: '45px', height: '45px' }} />
                        </NavButton>
                    </NavBar>
                    <Slide left when={sidebarOpen}>
                        <SideBar>
                            <Text>NavigationBar</Text>
                        </SideBar>
                    </Slide>
                </>
            )}

            {children}
            <div>Footer of Main</div>
        </div>
    )
}
