import * as yup from 'yup';

const usernameRegexRule = /^[\w\s@]+$/;
const emailRegexRule = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

export const profileSchema = yup.object({
  firstname: yup
    .string()
    .matches(usernameRegexRule, { message: 'only allow letters, number, and underscore' }),

  email: yup.string().matches(emailRegexRule, { message: 'Enter a valid email' }),

  lastname: yup
    .string()
    .matches(usernameRegexRule, { message: 'only allow letters, number, and underscore' }),
});
