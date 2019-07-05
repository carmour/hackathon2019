import React from 'react'
import BottomHalfSocMed from './BottomHalfSocMed'
import HeaderSocMed from './HeaderSocMed'
import MainSocMed from './MainSocMed'
import SocMedData from './SocMedData'

function SocMed() {
    return (
        <section className='page1'>
            <HeaderSocMed />
            <MainSocMed />
            {/* <BottomHalfSocMed /> */}
            <SocMedData />
        </section>
    )
}

export default SocMed;