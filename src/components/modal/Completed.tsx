import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { SuccessIcon } from '../icons';

export const CompleteModal = () => {
  return (
    <Card
      className='flex flex-col items-center justify-center w-[34rem] h-[40rem] space-y-10'
      placeholder='modal card'>
      <CardHeader placeholder='modal header' className='bg-transparent mt-10 ' shadow={false}>
        <SuccessIcon />
      </CardHeader>
      <CardBody placeholder='modal body' className='text-center space-y-5'>
        <Typography as='h3' placeholder='modal title' className='text-3xl font-semibold'>
          Success
        </Typography>
        <Typography placeholder='modal text' className='text-xl font-medium w-82'>
          You’ve successfully submitted your property for review. We review it and get back to you.
        </Typography>
      </CardBody>
      <CardFooter placeholder='modal footer' className='flex-1 flex-shrink-0'>
        <Typography as='h2' placeholder='message' className="text-xl font-semibold">
          Thank you
        </Typography>
      </CardFooter>
    </Card>
  );
};
