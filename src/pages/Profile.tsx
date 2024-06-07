import React from 'react'
import { PencilIcon } from '@heroicons/react/24/outline'
import { Typography, Input } from '@material-tailwind/react'
import { useFormik } from 'formik'
import { profileSchema } from '../schema/profile.schema'
import { ProfileFormValues } from '../types/form.types'

const initialValues: ProfileFormValues = {
  firstname: '',
  lastname: '',
  email: '',
}

const Profile = () => {
  const { handleChange, values } = useFormik({
    initialValues: initialValues,
    validationSchema: profileSchema,
    onSubmit: async () => {},
  })

  return (
    <section className="mt-8">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-md p-8">
          <form action="">
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <fieldset className="col-span-full sm:col-span-1 mb-4 group">
                <div className="flex items-center justify-between">
                  <Typography
                    placeholder={undefined}
                    variant="small"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </Typography>
                  <PencilIcon className="h-6 stroke-2 text-gray-500 opacity-0 group-hover:opacity-100 cursor-pointer" />
                </div>
                <div className="mt-2 mb-2">
                  <Input
                    type="text"
                    value={values.firstname}
                    id="firstname"
                    placeholder="size"
                    className="py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md"
                    onChange={handleChange}
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                    crossOrigin={undefined}
                  />
                </div>
              </fieldset>
              <fieldset className="col-span-full sm:col-span-1 mb-4 group">
                <div className="flex items-center justify-between">
                  <Typography
                    placeholder={undefined}
                    variant="small"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </Typography>
                  <PencilIcon className="h-6 stroke-2 text-gray-500 opacity-0 group-hover:opacity-100 cursor-pointer" />
                </div>
                <div className="mt-2 mb-2">
                  <Input
                    type="text"
                    value={values.lastname}
                    id="lastname"
                    placeholder="size"
                    className="py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                    crossOrigin={undefined}
                  />
                </div>
              </fieldset>
            </div>

            <fieldset className="col-span-full md:col-span-2 mb-8 group">
              <div className="flex items-center justify-between">
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                >
                  Email
                </Typography>
                <PencilIcon className="h-6 stroke-2 text-gray-500 opacity-0 group-hover:opacity-100 cursor-pointer" />
              </div>
              <div className="mt-2 mb-2">
                <Input
                  type="email"
                  value={values.email}
                  id="email"
                  placeholder="size"
                  className="py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md"
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                  crossOrigin={undefined}
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Profile
