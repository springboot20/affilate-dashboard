import * as yup from 'yup';

const usernameRegexRule = /^[\w\s@]+$/;
const emailRegexRule = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const passwordRegexRue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const registerSchema = yup.object({
  username: yup
    .string()
    .required('username is required, provide a username')
    .matches(usernameRegexRule, { message: 'only allow letters, number, and underscore' }),
  email: yup
    .string()
    .matches(emailRegexRule, { message: 'Enter a valid email' })
    .required('email is required, provide an email'),
  password: yup
    .string()
    .matches(passwordRegexRue, {
      message:
        'Password must be at least 8 digits characters long and contain at least one uppercase letter, one lowercase letter, and one number ',
    })
    .required('password is required, provide a password'),
});
