import { Dialog } from '@material-ui/core';
import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { useFormik } from "formik"
import { AddUserSchema } from '../../Schema';
import { baseUrl } from '../../baseUrl';
import { toast } from 'react-hot-toast';
import axios from 'axios';



const AddUserModal = ({ open, setOpen, handleOpen, handleClose }) => {
    const [divisions, setDivisions] = useState([])

    const [initialValues, setInitialValues] = useState({
        firstName: "",
        lastName: "",
        userType: "",
        division: "",
        district: "",

    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: AddUserSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    })

    const handleAddUser = (e) => {
        e.preventDefault()
        fetch(`${baseUrl}/addUser`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully added a user ');
                handleClose()
            })
    }

    // const options = {
    //     method: 'GET',
    //     url: 'https://bdapi.p.rapidapi.com/v1.1/divisions',
    //     headers: {
    //         'X-RapidAPI-Key': 'ab1d1eaaaamsh542041a87ef3564p104656jsn7de57a0d2c25',
    //         'X-RapidAPI-Host': 'bdapi.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     setDivisions(response.data.data);
    //     // console.log(response.data.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });




    return (
        <div className=''>
            <Dialog className='' fullWidth open={open} onClose={handleClose}>
                <div className='text-right'>
                    <CancelIcon onClick={handleClose} />
                </div>
                <p className='text-xl font-bold px-4'>Profile Information Creat</p>
                <section className="p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="">
                            <div className="col-span-full sm:col-span-3 ">
                                <label for="firstname" className="text-sm">First name</label>
                                <input
                                    id="firstname"
                                    name='firstName'
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text" placeholder="First name"
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900" />
                                {errors.firstName && touched.firstName ? <p className='text-sm text-red-600'>{errors.firstName}</p> : null}
                            </div>
                            <div className="col-span-full sm:col-span-3 my-5">
                                <label for="lastname" className="text-sm">Last name</label>
                                <input
                                    id="lastname"
                                    name='lastName'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text" placeholder="Last name"
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900" />
                                {errors.lastName && touched.lastName ? <p className='text-sm text-red-600'>{errors.lastName}</p> : null}
                            </div>

                            <div className="col-span-full sm:col-span-3 my-5">
                                <label for="lastname" className="text-sm">User Type</label>
                                <select
                                    name='userType'
                                    value={values.userType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                                >
                                    <option selected disabled hidden value={''}>
                                        Select User
                                    </option>
                                    <option
                                        value="admin"

                                    >
                                        Admin
                                    </option>
                                    <option
                                        value="employee"

                                    >
                                        Employee
                                    </option>
                                </select>
                                {errors.userType && touched.userType ? <p className='text-sm text-red-600'>{errors.userType}</p> : null}

                            </div>

                            <div className="col-span-full sm:col-span-3 my-5">
                                <label for="lastname" className="text-sm">Division</label>
                                <select
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                                    name='division'
                                    value={values.division}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option selected disabled hidden value={''}>
                                        Select Your Division
                                    </option>

                                    {/* {
                                        divisions?.map((division, idx) => <option
                                            key={idx}
                                            value={division.division}
                                        >
                                            {division.division}
                                        </option>)
                                    } */}

                                    <option
                                        value="dhaka"
                                    >
                                        Dhaka
                                    </option>
                                    <option
                                        value="chittagong"
                                    >
                                        Chittagong
                                    </option>
                                </select>
                                {errors.division && touched.division ? <p className='text-sm text-red-600'>{errors.division}</p> : null}
                            </div>


                            <div className="col-span-full sm:col-span-3 my-5">
                                <label for="lastname" className="text-sm">District</label>
                                <select
                                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                                    name='district'
                                    value={values.district}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option selected disabled hidden value={''}>
                                        Select Your District
                                    </option>
                                    <option
                                        value="ramna"
                                    >
                                        Ramna
                                    </option>
                                    <option
                                        value="agrabad"
                                    >
                                        Agrabad
                                    </option>
                                </select>
                                {errors.district && touched.district ? <p className='text-sm text-red-600'>{errors.district}</p> : null}
                            </div>




                        </div>

                        <div className='text-center'>
                            <button onClick={handleClose} className='mx-3 bg-zinc-100 p-2 px-16 rounded-sm text-sky-800'>Cancel</button>
                            <button type='submit' onClick={handleAddUser} className='bg-sky-800 p-2 px-16 rounded-sm text-white'>Save</button>
                        </div>

                    </form>
                </section>
            </Dialog>
        </div>
    );
};

export default AddUserModal;