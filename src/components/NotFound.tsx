import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen grid place-items-center'>
      <div className='mx-auto space-y-7 text-center'>
        <small className='text-4xl text-center font-semibold text-light-blue-800'>404 Page</small>
        <h1 className='text-2xl font-semibold text-light-blue-800'>
          Sorry the Page you requested does not exist
        </h1>
        <Button
          placeholder='back button'
          variant='outlined'
          color='light-blue'
          className='my-3 capitalize'
          onClick={() => navigate('/')}>
          back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
