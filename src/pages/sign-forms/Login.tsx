import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  CardBody,
} from '@material-tailwind/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { LoginFormValues } from '../../types/form.types';
import { loginSchema } from '../../schema/login.schema';
import { motion } from 'framer-motion';
import { classNames } from '../../utils/index';
import { GoogleIcon, GitHubIcon } from '../../components/icons';
import { Link } from 'react-router-dom';

const initialValues: LoginFormValues = {
  username_or_email: '',
  password: '',
};

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const motionConfig = {
    initial: {
      opacity: 0,
      scale: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const { errors, values, handleChange, handleSubmit, touched, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async () => {},
  });

  return (
    <motion.div {...motionConfig}>
      <section className='grid place-items-center h-[60vh]'>
        <Card placeholder='' className='p-8 bg-transparent' shadow={false}>
          <CardHeader
            floated={false}
            shadow={false}
            className='m-0 grid bg-transparent mb-3'
            placeholder='form title'>
            <span className='font-semibold text-3xl bg-gradient-to-l from-red-700 to-light-blue-500 bg-clip-text text-transparent'>
              Login
            </span>
          </CardHeader>

          <form className='mb-2 w-[35rem] md:w-[45rem]' onSubmit={handleSubmit}>
            <div className='mb-1 flex flex-col gap-6'>
              <fieldset className='mb-2'>
                <Typography
                  variant='small'
                  className='text-gray-700 font-semibold text-xl mb-3'
                  placeholder=''>
                  Username / Email
                </Typography>
                <Input
                  id='username_or_email'
                  value={values.username_or_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  crossOrigin={undefined}
                  size='lg'
                  placeholder='name@mail.com'
                  className={classNames(
                    errors.username_or_email && touched.username_or_email
                      ? '!border-t-red-500 !border-red-500'
                      : '',
                    '!border-t-gray-500 !border-gray-500 py-6'
                  )}
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                />
              </fieldset>

              <fieldset className='mb-2'>
                <Typography
                  variant='small'
                  className='text-gray-700 font-semibold text-xl mb-3'
                  placeholder=''>
                  Password
                </Typography>
                <Input
                  id='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  crossOrigin={undefined}
                  type={showPassword ? 'text' : 'password'}
                  size='lg'
                  placeholder='********'
                  className={classNames(
                    errors.password && touched.password ? '!border-t-red-500 !border-red-500' : '',
                    '!border-t-gray-500 !border-gray-500 py-6'
                  )}
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                  icon={
                    showPassword ? (
                      <EyeSlashIcon
                        className='text-gray-500 h-7 cursor-pointer'
                        onClick={() => setShowPassword((prevState) => !prevState)}
                      />
                    ) : (
                      <EyeIcon
                        className='text-gray-500 h-7 cursor-pointer'
                        onClick={() => setShowPassword((prevState) => !prevState)}
                      />
                    )
                  }
                />
              </fieldset>
            </div>
            <Button
              className='mt-6 py-3.5 rounded-3xl capitalize disabled:bg-gray-500 text-2xl'
              fullWidth
              placeholder=''
              disabled
              color='light-blue'>
              login
            </Button>
            <div className='w-full flex justify-between items-center my-5'>
              <Checkbox
                crossOrigin={undefined}
                label={
                  <Typography
                    variant='small'
                    color='gray'
                    className='flex items-center font-normal ml-1 mt-1'
                    placeholder=''>
                    Remember me
                  </Typography>
                }
                containerProps={{ className: 'ml-1' }}
              />
              <p className=''>
                Don't have an account?{' '}
                <Link to='/register' className='text-light-blue-600'>
                  Register
                </Link>
              </p>
            </div>
          </form>

          <CardBody placeholder='login tab' className='p-0'>
            <div className='flex flex-col mb-10 items-center space-y-5 flex-shrink-0 justify-between'>
              <Button
                placeholder='sign options'
                className='shadow-2xl relative group bg-white capitalize flex w-full  items-center flex-shrink-0 overflow-hidden gap-3 group pr-[72px]'>
                <Typography
                  as='span'
                  placeholder='sign option text'
                  className='text-xl text-gray-800 font-medium tracking-wider bg-gradient-to-l from-red-700 to-light-blue-500 bg-clip-text text-transparent'>
                  Sign in with Google
                </Typography>
                <span className='absolute right-0 top-1/2 -translate-y-1/2 p-6 bg-light-blue-600 group:hover:bg-light-blue-700'>
                  <GoogleIcon className='h-6 w-6 fill-white bg-clip-text text-transparent' />
                </span>
              </Button>
              <Button
                placeholder='sign options'
                variant='gradient'
                color='light-blue'
                className='shadow-2xl relative group capitalize flex-shrink-0 flex w-full items-center overflow-hidden gap-3 group pr-[72px]'>
                <Typography
                  placeholder='sign option text'
                  as='span'
                  className='text-xl font-medium tracking-wider'>
                  Sign in with Github
                </Typography>
                <span className='absolute right-0 top-1/2 -translate-y-1/2 p-6 bg-light-blue-600 group:hover:bg-light-blue-700'>
                  <GitHubIcon className='h-6 w-6 fill-white' />
                </span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </motion.div>
  );
};

export default Login;
