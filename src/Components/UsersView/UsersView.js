import React from 'react';
import { Link } from 'react-router-dom';

const UsersView = () => {
    return (
        <div className='w-2/4 mx-auto mt-20'>
            <h4 className='my-5 font-bold'>Users view</h4>
            <hr className='mb-5' />
            <div className='mx-10'>

                <span className='flex items-center my-5'><h3 className='font-semibold'>First Name* : </h3> <p className='mx-10'>ALEX</p> </span>
                <span className='flex items-center my-5'><h3 className='font-semibold'>Last Name* : </h3> <p className='mx-10'>Haales</p> </span>
                <span className='flex items-center my-5'><h3 className='font-semibold'>User Type* : </h3> <p className='mx-10'>Admin</p> </span>
                <span className='flex items-center my-5'><h3 className='font-semibold'>Division* : </h3> <p className='mx-10'>Dhaka</p> </span>
                <span className='flex items-center my-5'><h3 className='font-semibold'>District* : </h3> <p className='mx-10'>Ramna</p> </span>

                <div className='mt-16'>
                    <Link to="/"><button className='mx-3 bg-zinc-100 p-2 px-16 rounded-sm text-sky-500/50'>Cancel</button></Link>
                    <Link to="/updateUserForm"><button className='bg-sky-500/50 p-2 px-16 rounded-sm text-white'>Edit</button></Link>
                </div>
            </div>

        </div>
    );
};

export default UsersView;