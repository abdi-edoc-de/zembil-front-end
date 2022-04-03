import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    userName: yup.string().required(),
    fullName: yup.string().required().matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.'),
    email: yup.string().email().required(),
    phone: yup.string().required().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone nu,mber is not valid"
    ),
    password: yup.string().min(8).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required()
});
