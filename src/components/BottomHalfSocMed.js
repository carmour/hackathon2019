import React from 'react'

function BottomHalfSocMed() {
    return (
        // this is the bottom half div
        <div className='bottomHalf'>
            {/* this is the top half of the bottom half */}
            <div className='bottomHalf__top'>
                {/* this is the left half */}
                <div className='bottomHalf__top--left'>
                    {/* this is the text */}
                    <div className='bottomHalf__top--title'>THIS IS THE TEXT ON THE LEFT</div>
                    {/* these are the boxes */}
                    <div className='bottomHalf__top--images'>
                        {/* these are the individual boxes */}
                        <div className='bottomHalf__top--imageLeft'>this is the left image</div>
                        <div className='bottomHalf__top--imageRight'>this is the right image</div>
                    </div>
                </div>
                {/* this is the right half */}
                <div className='bottomHalf__top--right'>
                    {/* this is the text */}
                    <div className='bottomHalf__top--title'>THIS IS THE TEXT ON THE RIGHT</div>
                    {/* these are the boxes */}
                    <div className='bottomHalf__top--images'>
                        {/* these are the individual boxes */}
                        <div className='bottomHalf__top--imageLeft'>this is the left image</div>
                        <div className='bottomHalf__top--imageRight'>this is the right image</div>
                    </div>
                </div>
            </div>

            {/* this is the  bottom half of the bottom half*/}
            <div className='bottomHalf__bottom'>
                {/* this is the left half */}
                <div className='bottomHalf__bottom--'>
                    {/* this is the image */}
                    <div></div>
                    {/* this is the top text */}
                    <div></div>
                    {/* this is the bottom text */}
                    <div></div>
                </div>
                {/* this is the right half */}
                <div>
                    {/* this is the image */}
                    <div></div>
                    {/* this is the top text */}
                    <div></div>
                    {/* this is the bottom text */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default BottomHalfSocMed;