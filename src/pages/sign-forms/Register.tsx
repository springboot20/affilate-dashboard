import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import {
  Card,
  Input,
  Checkbox,
  Typography,
  CardHeader,
} from '@material-tailwind/react'
import { RegisterFormValues } from '../../types/form.types'
import { useFormik } from 'formik'
import { registerSchema } from '../../schema/register.schema'
import { motion } from 'framer-motion'

import { classNames } from '../../utils'
import { Link } from 'react-router-dom'

const initialValues: RegisterFormValues = {
  username: '',
  email: '',
  password: '',
}

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

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
  }

  const {
    values,
    handleBlur,
    errors,
    handleSubmit,
    handleChange,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      // handleReset();

      console.log(values)

      actions.resetForm()
    },
  })
  return (
    <motion.div {...motionConfig}>
      <section className="h-[70vh] grid place-items-center">
        <Card placeholder="" className="p-8 bg-transparent" shadow={false}>
          <CardHeader
            floated={false}
            shadow={false}
            className="m-0 grid  bg-transparent "
            placeholder="form title"
          >
            <span className="my-2 font-semibold text-2xl text-light-blue-500">
              Sign up
            </span>
          </CardHeader>
          <Card color="transparent" shadow={false} placeholder="">
            <form
              className="mt-8 mb-4 w-[35rem] md:w-[45rem]"
              onSubmit={handleSubmit}
            >
              <div className="mb-1 flex flex-col gap-6">
                <fieldset>
                  <Typography
                    variant="small"
                    className="mb-2 text-xl font-medium text-gray-800"
                    placeholder=""
                  >
                    Username
                  </Typography>
                  <Input
                    id="username"
                    crossOrigin={undefined}
                    size="lg"
                    value={values.username}
                    type="text"
                    placeholder="username e.g @springboot"
                    className={classNames(
                      errors.username && touched.username
                        ? '!border-t-red-500 !border-red-500'
                        : '',
                      '!border-t-gray-500 !border-gray-500 py-6',
                    )}
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </fieldset>
                <fieldset>
                  <Typography
                    variant="small"
                    className="mb-2 text-xl font-medium text-gray-800"
                    placeholder=""
                  >
                    Email
                  </Typography>
                  <Input
                    id="email"
                    crossOrigin={undefined}
                    size="lg"
                    value={values.email}
                    type="email"
                    placeholder="email e.g name@mail.com"
                    className={classNames(
                      errors.email && touched.email
                        ? '!border-t-red-500 !border-red-500'
                        : '',
                      '!border-t-gray-500 !border-gray-500 py-6',
                    )}
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </fieldset>
                <fieldset>
                  <Typography
                    variant="small"
                    className="mb-2 text-xl font-medium text-gray-800"
                    placeholder=""
                  >
                    Password
                  </Typography>
                  <Input
                    id="password"
                    crossOrigin={undefined}
                    type={showPassword ? 'text' : 'password'}
                    size="lg"
                    value={values.password}
                    placeholder="********"
                    className={classNames(
                      errors.password && touched.password
                        ? '!border-t-red-500 !border-red-500'
                        : '',
                      '!border-t-gray-500 !border-gray-500 py-6',
                    )}
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={
                      showPassword ? (
                        <EyeSlashIcon
                          className="text-gray-500 h-7 cursor-pointer"
                          onClick={() =>
                            setShowPassword((prevState) => !prevState)
                          }
                        />
                      ) : (
                        <EyeIcon
                          className="text-gray-500 h-7 cursor-pointer"
                          onClick={() =>
                            setShowPassword((prevState) => !prevState)
                          }
                        />
                      )
                    }
                  />
                </fieldset>
              </div>
              <button
                className={classNames(
                  'mt-6 py-3 px-3 w-full rounded-xl capitalize text-gray-100 shadow-md hover:shadow-md text-2xl font-medium',
                  isSubmitting ? 'bg-light-blue-500' : 'bg-light-blue-500/60',
                )}
                disabled={isSubmitting}
                type="submit"
              >
                register
              </button>
              <div className="w-full flex justify-between items-center my-5 flex-col md:flex-row">
                <Checkbox
                  crossOrigin={undefined}
                  color="light-blue"
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal ml-1 mt-1 text-xl"
                      placeholder=""
                    >
                      I agree the
                      <a
                        href="#"
                        className=" transition-colors hover:text-gray-900"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: '-ml-0' }}
                />
                <p className="inline-flex items-center text-xl">
                  Already have an account?{' '}
                  <Link to="/login" className="ml-1 text-light-blue-600">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </Card>
        </Card>
      </section>
    </motion.div>
  )
}

export default Register
