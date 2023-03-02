import { Dialog } from '@material-ui/core';
import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

const AddUserModal = ({ open, setOpen, handleOpen, handleClose }) => {

    

    return (
        <div className=''>
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
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3 my-5">
                                <label for="lastname" className="text-sm">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name"
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3 my-5">
                                <label for="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email"
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900" />
                            </div>
                            <div className="col-span-full my-5">
                                <label for="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder=""
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900" />
                            </div>
                        </div>

                        <div className='text-center'>
                            <button onClick={handleClose} className='mx-3 bg-zinc-100 p-2 px-16 rounded-sm text-sky-800'>Cancel</button>
                            <button type='submit' className='bg-sky-800 p-2 px-16 rounded-sm text-white'>Save</button>
                        </div>

                    </form>
                </section>
            </Dialog>
        </div>
    );
};

export default AddUserModal;