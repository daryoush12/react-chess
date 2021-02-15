import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { useSelector, useDispatch } from 'react-redux'
import { newTask } from '@Actions/workActions'
import Mobile from './mobile'
import Desktop from './desktop'

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Box = styled.div`
    width: 100px;
    height: 100px;
    color: white;
    background-color: green;
    margin-right: auto;
    margin-left: auto;
`

export default function Main() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)',
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const tasks = useSelector((state) => state.work)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(newTask('task'))
    }, [])

    function addTask(e) {
        e.preventDefault()
        dispatch(newTask('lets go'))
    }

    return (
        <div>
            <h1>Device Test!</h1>
            {isDesktopOrLaptop && <Mobile />}
            {isTabletOrMobile && <Desktop />}
            {tasks.map((t) => (
                <div key={t}>{t}</div>
            ))}
            <button type="button" onClick={addTask}>
                Add
            </button>
            <CarouselProvider
                naturalSlideWidth={20}
                naturalSlideHeight={20}
                totalSlides={3}
                visibleSlides={1}
                infinite
            >
                <Slider>
                    <Slide index={0}>
                        <Box>I am the first Slide.</Box>
                    </Slide>
                    <Slide index={1}>
                        <Box>I am the second Slide.</Box>
                    </Slide>
                    <Slide index={2}>
                        <Box>I am the third Slide.</Box>
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
    )
}
