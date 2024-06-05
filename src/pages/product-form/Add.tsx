import {
  Typography,
  Input,
  Card,
  CardBody,
  Textarea,
  CardFooter,
  Button,
  Select,
  Option,
  Tab,
} from '@material-tailwind/react';
import React from 'react';

export const Add = ({
  setActiveTab,
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const categories = [
    { key: 'apparel_accessories', value: 'Apparel and Accessories' },
    { key: 'electronics', value: 'Electronics' },
    { key: 'home_furniture', value: 'Home and Furniture' },
    { key: 'beauty_personal_care', value: 'Beauty and Personal Care' },
    { key: 'health_wellness', value: 'Health and Wellness' },
    { key: 'books_media_entertainment', value: 'Books, Media, and Entertainment' },
    { key: 'toys_games', value: 'Toys and Games' },
    { key: 'sports_outdoors', value: 'Sports and Outdoors' },
    { key: 'baby_kids', value: 'Baby and Kids' },
    { key: 'pet_supplies', value: 'Pet Supplies' },
    { key: 'food_grocery', value: 'Food and Grocery' },
    { key: 'automotive', value: 'Automotive' },
    { key: 'office_supplies_stationery', value: 'Office Supplies and Stationery' },
  ];

  return (
    <Card placeholder={undefined} className='p-8 sm:w-[50rem] md:w-[60rem]'>
      <CardBody placeholder={undefined}>
        <form className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <fieldset className='col-span-full md:col-span-2 mb-14'>
            <Typography
              placeholder={undefined}
              variant='small'
              className='block text-xl font-semibold leading-6 text-gray-900 mb-2'>
              Product name
            </Typography>
            <Input
              type='text'
              placeholder='product name'
              className='py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md bg-gray-400'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              crossOrigin={undefined}
            />
          </fieldset>
          <fieldset className='col-span-full md:col-span-2 mb-14'>
            <Typography
              placeholder={undefined}
              variant='small'
              className='block text-xl font-semibold leading-6 text-gray-900 mb-2'>
              Price
            </Typography>
            <Input
              type='number'
              placeholder='price'
              className='py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md bg-gray-400'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              crossOrigin={undefined}
            />
          </fieldset>
          <fieldset className='col-span-full md:col-span-2 mb-14'>
            <Typography
              placeholder={undefined}
              variant='small'
              className='block text-xl font-semibold leading-6 text-gray-900 mb-2'>
              Category
            </Typography>
            <Select
              placeholder='category selection'
              className='py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md'
              size='lg'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              selected={(element) =>
                element &&
                React.cloneElement(element, {
                  disabled: true,
                  className: 'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
                })
              }>
              {categories.map(({ key, value }) => (
                <Option key={key} value={value} className='flex items-center gap-2'>
                  {value}
                </Option>
              ))}
            </Select>
          </fieldset>
          <fieldset className='col-span-full md:col-span-2 mb-20'>
            <Typography
              placeholder={undefined}
              variant='small'
              className='block text-xl font-semibold leading-6 text-gray-900 mb-2'>
              Size
            </Typography>
            <div className='mt-2 mb-2'>
              <Input
                type='text'
                placeholder='size'
                className='py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md'
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
                crossOrigin={undefined}
              />
            </div>
          </fieldset>
          <fieldset className='col-span-full md:col-span-2 mb-20'>
            <Typography
              placeholder={undefined}
              variant='small'
              className='block text-xl font-semibold leading-6 text-gray-900 mb-2'>
              Color
            </Typography>
            <div className='mt-2 mb-2'>
              <Input
                type='text'
                placeholder='color'
                className='py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md bg-gray-400'
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
                crossOrigin={undefined}
              />
            </div>
          </fieldset>
          <fieldset className='col-span-full md:col-span-2 mb-20'>
            <Typography
              placeholder={undefined}
              variant='small'
              className='block text-xl font-semibold leading-6 text-gray-900 mb-2'>
              Stock
            </Typography>
            <div className='mt-2 mb-2'>
              <Input
                type='number'
                placeholder='stock'
                className='py-6 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md bg-gray-400'
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
                crossOrigin={undefined}
              />
            </div>
          </fieldset>
          <fieldset className='col-span-full mt-10'>
            <Typography
              placeholder={undefined}
              variant='small'
              className='block text-xl font-semibold leading-6 text-gray-900 mb-2'>
              Product description
            </Typography>
            <div className='mt-2 mb-2'>
              <Textarea
                rows={10}
                placeholder='product description'
                className='py-3 px-2 mb-2 !border-blue-400 focus:border-t-gray-900 rounded-md bg-gray-400'
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}></Textarea>
            </div>
          </fieldset>
        </form>
      </CardBody>
      <CardFooter placeholder='add product form footer' className=''>
        <Tab value='upload' className='bg-transparent flex justify-end' placeholder='next tab'>
          <Button
            size='lg'
            className='bg-affiliate-green capitalize'
            placeholder='next button'
            onClick={() => setActiveTab('upload')}>
            Next
          </Button>
        </Tab>
      </CardFooter>
    </Card>
  );
};
