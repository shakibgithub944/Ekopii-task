import React from 'react';

const AddUserModal = ({ setOpenModal }) => {

    return (
        <div className=''>
            <div className=''>
                <h2>Profile Information Create</h2>
                <button onClick={() => setOpenModal(false)}>x</button>
            </div>
            <hr />
            <form className=''>
                <div className=''>
                    <div className=''>
                        <p className=''>First Name *</p>
                        <input type='text' name='firstName' placeholder='Enter Your First Name' />
                    </div>
                    <div className=''>
                        <p className=''>Last Name *</p>
                        <input type='text' name='lastName' placeholder='Enter Last First Name' />
                    </div>
                    <div className=''>
                        <p className=''>User Type *</p>
                        <input type='text' name='userType' placeholder='Enter' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUserModal;