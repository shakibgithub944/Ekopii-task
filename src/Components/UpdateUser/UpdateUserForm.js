import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';

const UpdateUserForm = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [user, setUser] = useState({});
    const { firstName, lastName, userType, division, district, _id } = user;

    useEffect(() => {
        fetch(`${baseUrl}/singleUser/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [id])


    const handleUpdateUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const division = form.division.value;
        const district = form.district.value;

        if (!firstName || !lastName || !division || !district) {
            toast.error('Please enter valid text')
            return;
        }

        const updatedUserData = {
            firstName,
            lastName,
            division,
            district
        }
        fetch(`${baseUrl}/updatedUser/${_id}`, {
            method: 'PUT',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(updatedUserData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('User Information Successfully Updated');
                    navigate(`/usersView/${_id}`)
                }
            })


        console.log(firstName, lastName, division, district);
    }

    return (
        <div className='w-3/4 mx-auto mt-20'>
            <h4 className='my-5 font-bold'>Users Update</h4>
            <hr className='mb-5' />
            <form onSubmit={handleUpdateUser}>
                <div className="">
                    <label for="firstname" className="text-sm font-semibold">Name</label>
                    <span className='flex'>
                        <input id="firstname" type="text" name='firstName' defaultValue={firstName} placeholder="First name"
                            className="w-full p-2 rounded-md border" />
                        <input id="lastName" type="text" name='lastName' defaultValue={lastName} placeholder="Last name"
                            className="w-full p-2 rounded-md border" />
                    </span>

                    <div className='w-full flex mt-5'>
                        <div className=" w-full">
                            <label for="lastname" className="text-sm">Division</label>
                            <select
                                name='division'
                                className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                            >

                                <option
                                    value="dhaka"
                                    selected={division === 'dhaka'}
                                >
                                    Dhaka
                                </option>
                                <option
                                    value="chittagong"
                                    selected={division === 'chittagong'}
                                >
                                    Chittagong
                                </option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label for="lastname" className="text-sm">District</label>
                            <select
                                name='district'
                                className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                            >
                                <option
                                    value="ramna"
                                    selected={district === 'ramna'}
                                >
                                    ramna
                                </option>
                                <option
                                    value="agrabad"
                                    selected={district === 'agrabad'}
                                >
                                    agrabad
                                </option>
                            </select>
                        </div>

                    </div>
                    <div className='mt-16 flex items-center justify-center'>
                        <Link to={`/usersView/${_id}`}><button className='mx-3 bg-zinc-100 p-2 px-16 rounded-sm text-sky-800'>Cancel</button></Link>
                        <button type='submit' className='bg-sky-800 p-2 px-16 rounded-sm text-white'>Save</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default UpdateUserForm;