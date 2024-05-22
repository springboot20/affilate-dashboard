import * as yup from 'yup';

const username_or_email_RegexRule =
  /^(?=.*[a-zA-Z0-9._-])([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}|[a-zA-Z0-9._-]+)$/;
const passwordRegexRue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const loginSchema = yup.object({
  username_or_email: yup
    .string()
    .optional()
    .required('username or email is required')
    .matches(username_or_email_RegexRule, {
      message: 'only allow letters, number, and underscore' || 'Enter a valid email',
    }),
  password: yup
    .string()
    .matches(passwordRegexRue, {
      message:
        'Password must be at least 8 digits characters long and contain at least one uppercase letter, one lowercase letter, and one number ',
    })
    .required('password is required, provide a password'),
});
