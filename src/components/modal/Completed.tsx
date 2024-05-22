import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { SuccessIcon } from '../icons';
import { useNavigate } from 'react-router-dom';

export const CompleteModal = () => {
  const navigate = useNavigate();

  return (
    <Card
      className='flex flex-col items-center justify-center w-[34rem] h-[40rem] space-y-10'
      placeholder='modal card'>
      <CardHeader placeholder='modal header' className='bg-transparent mt-6' shadow={false}>
        <SuccessIcon />
      </CardHeader>
      <CardBody placeholder='modal body' className='text-center space-y-5'>
        <Typography as='h3' placeholder='modal title' className='text-2xl font-medium'>
          Success
        </Typography>
        <Typography placeholder='modal text' className='text-lg font-medium w-72'>
          You’ve successfully submitted your property for review. We review it and get back to you.
        </Typography>
      </CardBody>
      <CardFooter placeholder='modal footer' className='flex-1 flex-shrink-0'>
        <Button
          placeholder='modal button'
          fullWidth
          onClick={() => {
            navigate('/shop');
          }}
          className='bg-affiliate-green py-3.5 capitalize w-full text-sm font-medium rounded-xl'>
          Okay
        </Button>
      </CardFooter>
    </Card>
  );
};
