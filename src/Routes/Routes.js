import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import UpdateUserForm from "../Components/UpdateUser/UpdateUserForm";
import AdminUsers from "../Components/UsersList/AdminUsers";
import EmployeeUsers from "../Components/UsersList/EmployeeUsers";
import UsersView from "../Components/UsersView/UsersView";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/adminUserList',
                element: <AdminUsers></AdminUsers>
            },
            {
                path: '/employeeUserList',
                element: <EmployeeUsers></EmployeeUsers>
            },

        ]

    },
    {
        path: '/usersView',
        element: <UsersView></UsersView>
    },
    {
        path: '/updateUserForm',
        element: <UpdateUserForm></UpdateUserForm>
    }
])