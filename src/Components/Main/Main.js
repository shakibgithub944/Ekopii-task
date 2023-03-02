import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div className='main'>
            {/* <Users></Users> */}
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;