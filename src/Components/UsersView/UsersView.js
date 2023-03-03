import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';

const UsersView = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${baseUrl}/singleUser/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [id])

    const { firstName, lastName, userType, division, district, _id } = user;

    return (
        <div className='w-2/4 mx-auto mt-20'>
            <h4 className='my-5 font-bold'>Users view</h4>
            <hr className='mb-5' />
            <div className='md:mx-20'>

                <div className='md:mx-24'>
                    <span className='flex items-center my-5'><h3 className='font-semibold'>First Name* : </h3> <p className='mx-8'>{firstName}</p> </span>
                    <span className='flex items-center my-5'><h3 className='font-semibold'>Last Name* : </h3> <p className='mx-8'>{lastName}</p> </span>
                    <span className='flex items-center my-5'><h3 className='font-semibold'>User Type* : </h3> <p className='mx-8'>{userType}</p> </span>
                    <span className='flex items-center my-5'><h3 className='font-semibold'>Division* : </h3> <p className='mx-8'>{division}</p> </span>
                    <span className='flex items-center my-5'><h3 className='font-semibold'>District* : </h3> <p className='mx-8'>{district}</p> </span>
                </div>

                <div className='mt-16'>
                    <Link to="/"><button className='mx-3 bg-zinc-100 p-2 px-5 md:px-16 rounded-sm text-sky-800'>Cancel</button></Link>
                    <Link to={`/updateUserForm/${_id}`}>
                        <button className='bg-sky-800 p-2 px-5 md:px-16 rounded-sm text-white'>Edit</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default UsersView;