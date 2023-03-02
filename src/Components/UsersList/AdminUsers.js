import React from 'react';
import { Link } from 'react-router-dom';


const AdminUsers = () => {

    return (
        <div className='w-2/4 mx-auto'>
            <h4>Admin Users List</h4>
            <table className='w-full'>
                <tbody className='text-center'>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td><Link to="/usersView"><button className='text-sky-500/50 px-8 py-1 rounded-lg bg-zinc-100'>Details</button></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminUsers;