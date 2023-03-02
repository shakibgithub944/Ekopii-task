import React from 'react';
import { Link } from 'react-router-dom';

const UpdateUserForm = () => {
    return (
        <div className='w-3/4 mx-auto mt-20'>
            <h4 className='my-5 font-bold'>Users Update</h4>
            <hr className='mb-5' />
            <form>
                <div className="">
                    <label for="firstname" className="text-sm font-semibold">Name</label>
                    <span className='flex'>
                        <input id="firstname" type="text" placeholder="First name"
                            className="w-full p-2 rounded-md border" />
                        <input id="lastName" type="text" placeholder="Last name"
                            className="w-full p-2 rounded-md border" />
                    </span>

                    <div className='w-full flex mt-5'>
                        <div className='w-full'>
                            <label for="firstname" className="text-sm font-semibold">District</label>
                            <input id="firstname" type="text" placeholder="First name"
                                className=" w-full p-2 rounded-md border" />
                        </div>

                        <div className='w-full'>
                            <label for="firstname" className="text-sm font-semibold">Division</label>
                            <input id="lastName" type="text" placeholder="Last name"
                                className=" w-full p-2 rounded-md border" />
                        </div>

                    </div>
                    <div className='mt-16 flex items-center justify-center'>
                        <Link to="/"><button className='mx-3 bg-zinc-100 p-2 px-16 rounded-sm text-sky-800'>Cancel</button></Link>
                        <Link><button className='bg-sky-800 p-2 px-16 rounded-sm text-white'>Save</button></Link>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default UpdateUserForm;