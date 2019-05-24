import React from 'react';
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div>
            <div>
                <Link to='/page1'>
                    <div>page1</div>
                </Link>
                <Link to='/page2'>
                    <div>page2</div>
                </Link>
                <Link to='/page3'>
                    <div>page3</div>
                </Link>
            </div>
        </div>
    )
}

export default SideBar;