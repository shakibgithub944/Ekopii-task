import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../baseUrl';
import AddUserModal from '../AddUserModal/AddUserModal';
import Users from '../UsersList/Users';


const Home = () => {

    const [open, setOpen] = useState(false);
    const [userType, setUserType] = useState('');
    const [usersData, setUsersData] = useState([]);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {

        fetch(`${baseUrl}/user/${userType}`)
            .then(res => res.json())
            .then(data => {
                setUsersData(data)
                // console.log(data);
            });

    }, [userType]);







    return (
        <div className='w-3/4 mx-auto mt-20'>
            <h4 className='my-5 font-bold'>Users List</h4>
            <hr className='mb-5' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between my-5'>
                    <h4 className='mx-4  p-2.5 font-semibold'>User Type:</h4>
                    <div>
                        <select
                            onChange={(e) => setUserType(e.target.value)}
                            className="border-2 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-sky-800 bg-transparent"
                        >
                            <option selected disabled hidden value={''}>
                                Choose One
                            </option>
                            <option
                                value="admin"
                            >
                                Admin Users
                            </option>
                            <option
                                value="employee"
                            >
                                Employee Users
                            </option>
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={handleOpen} className='bg-sky-800 p-2 rounded-lg text-white'>Add User</button>
                </div>
            </div>
            {/* Modal */}

            <div>
                {userType &&

                    <Users
                        usersData={usersData}
                    >

                    </Users>
                }
            </div>



            <div>
                <AddUserModal
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                ></AddUserModal>
            </div>

        </div>
    );
};

export default Home;