import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/desktop-hd.svg'

function SideBar() {
    return (
        <div>
            <div>
                <div>
                    <img src={Logo}></img>
                </div>
                <div className='sideBar__title'>Display information by: </div>
                <div className='sideBar__categories'>
                    <Link to='/all'>
                        <div className='sideBar__category'>Home</div>
                    </Link>
                    <Link to='/entertainment'>
                        <div className='sideBar__category'>Entertainment</div>
                    </Link>
                    <Link to='/socmed'>
                        <div className='sideBar__category'>SocMed</div>
                    </Link>
                    <Link to='/entertainment'>
                        <div className='sideBar__category'>Lifestyle</div>
                    </Link>
                    <Link to='/entertainment'>
                        <div className='sideBar__category'>Technology</div>
                    </Link>
                    <Link to='/entertainment'>
                        <div className='sideBar__category'>World</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar;