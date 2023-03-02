import React, { useEffect, useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, OutlinedInput, InputAdornment } from "@material-ui/core";

const Home = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div className='w-2/4 mx-auto mt-20'>
            <h4 className='my-5 font-bold'>Users List</h4>
            <hr className='mb-5' />
            <div className='flex items-center justify-between'>
                <div className='flex '>
                    <h4 className='mx-4'>User Type:</h4>
                    <select className='outline' id="selectedUser" name="selectedUser">
                        <option value="Admin">Please Select User</option>
                        <option value="Admin">Admin Users List</option>
                        <option value="Employee">Employee Users List</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleOpen} className='bg-sky-500/50 p-2 rounded-lg text-white'>Add User</button>
                </div>
            </div>
            {/* Modal */}
            <div>
                <Dialog className='' fullWidth open={open} onClose={handleClose}>
                    <div className='text-right'>
                        <CancelIcon onClick={handleClose} />
                    </div>
                    <p className='text-xl font-bold px-4'>Profile Information Creat</p>
                    <section className="p-6">
                        <form action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                            <div className="">
                                <div className="col-span-full sm:col-span-3 ">
                                    <label for="firstname" className="text-sm">First name</label>
                                    <input id="firstname" type="text" placeholder="First name"
                                        className="w-full p-2 rounded-md focus:ring outline focus:ring-opacity-75 focus:ring-cyan-400 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3 my-5">
                                    <label for="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" type="text" placeholder="Last name"
                                        className="w-full p-2 rounded-md focus:ring outline focus:ring-opacity-75 focus:ring-cyan-400 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3 my-5">
                                    <label for="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email"
                                        className="w-full p-2 rounded-md focus:ring outline focus:ring-opacity-75 focus:ring-cyan-400 text-gray-900" />
                                </div>
                                <div className="col-span-full my-5">
                                    <label for="address" className="text-sm">Address</label>
                                    <input id="address" type="text" placeholder=""
                                        className="w-full p-2 rounded-md focus:ring outline focus:ring-opacity-75 focus:ring-cyan-400 text-gray-900" />
                                </div>
                            </div>

                            <div className='text-center'>
                                <button onClick={handleClose} className='mx-3 bg-zinc-100 p-2 px-16 rounded-sm text-sky-500/50'>Cancel</button>
                                <button type='submit' className='bg-sky-500/50 p-2 px-16 rounded-sm text-white'>Save</button>
                            </div>

                        </form>
                    </section>
                </Dialog>
            </div>

        </div>
    );
};

export default Home;