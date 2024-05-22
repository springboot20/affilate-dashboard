import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Rating,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, StarIcon } from '@heroicons/react/24/outline';
import Laptop from '../../assets/laptop_devices.avif';

const ProductDescription = () => {
  return (
    <section className='max-w-9xl mx-auto mt-8'>
      <Card placeholder='card description container' className='p-12 '>
        <Link to='/shop' className='mt-5'>
          <Button
            placeholder='back button'
            className='hover:bg-transparent focus:bg-transparent flex items-center space-x-2 text-xl capitalize'
            variant='text'
            ripple={false}>
            <ChevronLeftIcon className='h-7 stroke-[4]' />
            <span>Back</span>
          </Button>
        </Link>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4'>
          <CardHeader
            placeholder='card header'
            className='mt-9 w-full mb-9'
            shadow={false}>
            <img src={Laptop} alt='' className='h-full w-full lg:w-auto lg:h-auto' />
          </CardHeader>
          <div className=''>
            <CardBody placeholder='card body' className=''>
              <div className='flex items-center justify-between mb-4'>
                <div className=''>
                  <Typography
                    as='h3'
                    className='text-xl text-affiliate-green '
                    placeholder='card title'>
                    Furnished 3 Bedroom Flat
                  </Typography>
                  <Typography placeholder='card sub title'>Product by springboot</Typography>
                </div>
                <div className=''>
                  <span className='inline-flex items-center space-x-2'>
                    <StarIcon className='h-7 drop-shadow-md fill-amber-400 stroke-0' />
                    <small className='text-base text-gray-500  flex items-center'>
                      4.9 <span className='bg-gray-400 h-2 w-2 block rounded-full mx-1'> </span>
                      (12,990){' '}
                    </small>
                  </span>
                  <Typography placeholder='product price' className='text-xl  text-affiliate-green'>
                    <span>#600,000</span>
                  </Typography>
                </div>
              </div>
              <div className='mt-24 space-y-10'>
                <Typography placeholder='product title' as='h3' className='text-2xl font-medium'>
                  About product
                </Typography>
                <Typography placeholder='product description' className='font-normal'>
                  Lorem ipsum dolor sit amet consectetur. Faucibus morbi viverra proin vulputate
                  ipsum facilisis tellus. Faucibus vel netus ipsum dignissim faucibus leo etiam.
                  Aliquam gravida duis lorem vel elit morbi. Lorem ipsum dolor sit amet consectetur.
                  Faucibus morbi viverra proin vulputate ipsum facilisis tellus. Faucibus vel netus
                  ipsum dignissim faucibus leo etiam. Aliquam gravida duis lorem vel elit morbi.
                  Lorem ipsum dolor sit amet consectetur. Faucibus morbi viverra proin vulputate
                  ipsum facilisis tellus. Faucibus vel netus ipsum dignissim faucibus leo etiam.
                  Aliquam gravida duis lorem vel elit morbi.
                </Typography>
              </div>
            </CardBody>
            <CardFooter placeholder='card footer'>
              <Typography placeholder='card footer title' as='h2' className='text-xl font-medium'>
                Review
              </Typography>
              <div className='mt-24 space-y-20'>
                <Card placeholder='review card' className='bg-transparent' shadow={false}>
                  <CardHeader
                    placeholder='review header'
                    className='flex items-center justify-between bg-transparent'
                    shadow={false}>
                    <div className='flex items-center space-x-4'>
                      <span className='block h-14 w-14 rounded-full bg-gray-400'></span>
                      <Typography as='span' placeholder='reviewer' className='text-lg font-medium'>
                        Damilare Usman
                      </Typography>
                    </div>
                    <Typography placeholder='review date' as='span'>
                      11/12/2022
                    </Typography>
                  </CardHeader>
                  <Typography placeholder='product description' className='font-normal mt-4'>
                    Lorem ipsum dolor sit amet consectetur. Faucibus morbi viverra proin vulputate
                    ipsum facilisis tellus. Faucibus vel netus ipsum dignissim faucibus leo etiam.
                    Aliquam gravida duis lorem vel elit morbi.
                  </Typography>
                  <CardFooter
                    placeholder='review start rating'
                    className='flex items-center space-x-2'>
                    <Rating value={4} placeholder='ratings' className='h-6' />
                    <Typography placeholder='rating count' className='text-lg font-medium'>
                      4.9
                    </Typography>
                  </CardFooter>
                </Card>
                <Card placeholder='review card' className='bg-transparent' shadow={false}>
                  <CardHeader
                    placeholder='review header'
                    className='flex items-center justify-between bg-transparent'
                    shadow={false}>
                    <div className='flex items-center space-x-4'>
                      <span className='block h-14 w-14 rounded-full bg-gray-400'></span>
                      <Typography as='span' placeholder='reviewer' className='text-lg font-medium'>
                        Ibukun Oluwasile
                      </Typography>
                    </div>
                    <Typography placeholder='review date' as='span'>
                      1 hr ago
                    </Typography>
                  </CardHeader>
                  <Typography placeholder='product description' className='font-normal mt-4'>
                    Lorem ipsum dolor sit amet consectetur. Faucibus morbi viverra proin vulputate
                    ipsum facilisis tellus. Faucibus vel netus ipsum dignissim faucibus leo etiam.
                    Aliquam gravida duis lorem vel elit morbi.
                  </Typography>
                  <CardFooter
                    placeholder='review start rating'
                    className='flex items-center space-x-2'>
                    <Rating value={4} placeholder='ratings' className='h-6' />
                    <Typography placeholder='rating count' className='text-lg font-medium'>
                      4.9
                    </Typography>
                  </CardFooter>
                </Card>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </section>
  );
};
export default ProductDescription