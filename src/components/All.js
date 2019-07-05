import React from 'react'
import BottomHalf from './BottomHalf'
import Header from './Header'
import Main from './Main'

function All() {
    return (
        <section className='page1'>
            <Header />
            <Main />
            <BottomHalf />
        </section>
    )
}

export default All;