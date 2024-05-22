import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Laptop from '../assets/laptop_1.avif';
import { StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Shop = () => {
  const config = {
    initial: {
      opacity: 0,
      scale: 0,
      x: 0,
      visible: true,
      hidden: true,
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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <section className='mt-8 mb-8'>
      <motion.div
        layout
        variants={gridVariants}
        {...config}
        className='px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        <motion.div layout>
          <Card className='h-[38rem]' placeholder={undefined}>
            <CardHeader placeholder={'card header'} className='relative mt-4' shadow={false}>
              <img src={Laptop} alt='' />
            </CardHeader>
            <CardBody placeholder='card body'>
              <div className='flex items-center justify-between mb-4'>
                <Typography
                  as='h3'
                  className='text-xl text-affiliate-green '
                  placeholder='card title'>
                  Affiliate
                </Typography>
                <span className='inline-flex items-center space-x-2'>
                  <StarIcon className='h-7 drop-shadow-md fill-amber-400 stroke-0' />
                  <small className='text-base text-gray-500 '>4.9</small>
                </span>{' '}
              </div>
              <Typography
                placeholder='card description'
                color='gray'
                className='text-xl font-normal'>
                Lorem ipsum dolor sit amet consectetur. Faucibus morbi viverra proin vulputate ipsum
                facilisis tellus. Faucibus vel netus ipsum dignissim faucibus leo etiam. Aliquam
                gravida duis lorem vel elit morbi.....
              </Typography>
            </CardBody>
            <CardFooter
              className='flex items-center justify-between flex-shrink-0'
              placeholder='card footer'>
              <Typography
                as='small'
                className='text-sm lg:text-xl text-gray-500'
                placeholder='producer name'>
                Product by springboot
              </Typography>
              <Button
                placeholder='price button'
                className='text-xl text-affiliate-green'
                variant='text'>
                <span>#600,000</span>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div layout>
          <Card className='h-[38rem]' placeholder={undefined}>
            <CardHeader placeholder={'card header'} className='relative mt-4' shadow={false}>
              <img src={Laptop} alt='' />
            </CardHeader>
            <CardBody placeholder='card body'>
              <div className='flex items-center justify-between mb-4'>
                <Typography
                  as='h3'
                  className='text-xl text-affiliate-green '
                  placeholder='card title'>
                  Affiliate
                </Typography>
                <span className='inline-flex items-center space-x-2'>
                  <StarIcon className='h-7 drop-shadow-md fill-amber-400 stroke-0' />
                  <small className='text-base text-gray-500 '>4.9</small>
                </span>{' '}
              </div>
              <Typography
                placeholder='card description'
                color='gray'
                className='text-xl font-normal'>
                Lorem ipsum dolor sit amet consectetur. Faucibus morbi viverra proin vulputate ipsum
                facilisis tellus. Faucibus vel netus ipsum dignissim faucibus leo etiam. Aliquam
                gravida duis lorem vel elit morbi.....
              </Typography>
            </CardBody>
            <CardFooter
              className='flex items-center justify-between flex-shrink-0'
              placeholder='card footer'>
              <Typography
                as='small'
                className='text-sm lg:text-xl text-gray-500'
                placeholder='producer name'>
                Product by springboot
              </Typography>
              <Button
                placeholder='price button'
                className='text-xl text-affiliate-green'
                variant='text'>
                <span>#600,000</span>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div layout>
          <Card className='h-[38rem]' placeholder={undefined}>
            <CardHeader placeholder={'card header'} className='relative mt-4' shadow={false}>
              <img src={Laptop} alt='' />
            </CardHeader>
            <CardBody placeholder='card body'>
              <div className='flex items-center justify-between mb-4'>
                <Typography
                  as='h3'
                  className='text-xl text-affiliate-green '
                  placeholder='card title'>
                  Affiliate
                </Typography>
                <span className='inline-flex items-center space-x-2'>
                  <StarIcon className='h-7 drop-shadow-md fill-amber-400 stroke-0' />
                  <small className='text-base text-gray-500 '>4.9</small>
                </span>{' '}
              </div>
              <Typography
                placeholder='card description'
                color='gray'
                className='text-xl font-normal'>
                Lorem ipsum dolor sit amet consectetur. Faucibus morbi viverra proin vulputate ipsum
                facilisis tellus. Faucibus vel netus ipsum dignissim faucibus leo etiam. Aliquam
                gravida duis lorem vel elit morbi.....
              </Typography>
            </CardBody>
            <CardFooter
              className='flex items-center justify-between flex-shrink-0'
              placeholder='card footer'>
              <Typography
                as='small'
                className='text-sm lg:text-xl text-gray-500'
                placeholder='producer name'>
                Product by springboot
              </Typography>
              <Button
                placeholder='price button'
                className='text-xl text-affiliate-green'
                variant='text'>
                <span>#600,000</span>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Shop;
