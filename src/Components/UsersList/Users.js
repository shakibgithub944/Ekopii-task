import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';


const Users = ({ usersData }) => {

    // console.log(usersData);

    return (
        <div className='w-3/4 mx-auto overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden'>

            <table className="w-full">
                <thead className=" font-semibold border-b border-b-sky-800">
                    <tr>
                        <th className="px-6 py-4 text-start">First Name Last Name</th>

                        <th className="px-6 py-4 text-start">User Type</th>

                        <th className="px-6 py-4 text-start">Division</th>

                        <th className="px-6 py-4 text-start">District</th>

                        <th className="px-6 py-4 text-start">Active/Inactive</th>
                        <th className="px-6 py-4 text-start">Details View</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-secondary">
                    {usersData?.map((user, i) => (
                        <tr key={i} className="whitespace-nowrap ">

                            <td className="px-6 py-4 text-start ">{user.firstName} {user.lastName}</td>
                            <td className="px-6 py-4 text-start ">{user.userType}</td>
                            <td className="px-6 py-4 text-start ">{user.division}</td>
                            <td className="px-6 py-4 text-start ">{user.district}</td>
                            <td className="px-6 py-4 text-start ">{user.division === 'dhaka' && user.district === 'ramna' ? 'True' : 'False'}</td>
                            <td className='px-6 py-4 text-start'>
                                <Link to={`/usersView/${user._id}`}>
                                    <button className='text-sky-800 px-8 py-1 rounded-lg bg-zinc-100'>Details</button>

                                </Link></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;