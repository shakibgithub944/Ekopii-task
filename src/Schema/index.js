import * as Yup from "yup";

export const AddUserSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required('Please Enter Your First Name'),
    lastName: Yup.string().min(2).max(25).required('Please Enter Your Last Name'),
})