import React from 'react'
import HeaderEntertainment from './HeaderEntertainment'
import MainEntertainment from './MainEntertainment'
import BottomHalfEntertainment from './BottomHalfEntertainment'
import EntertainmentData from './EntertainmentData'

function Entertainment() {
    return (
        <section className='page1'>
            <HeaderEntertainment />
            <MainEntertainment />
            {/* <BottomHalfEntertainment /> */}
            <EntertainmentData />
        </section>
    )
}

export default Entertainment;