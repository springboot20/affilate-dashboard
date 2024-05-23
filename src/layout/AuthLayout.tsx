import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <motion.div className='w-full flex flex-col gap-9 lg:gap-0 justify-center items-center lg:flex-row lg:justify-between lg:items-stretch h-screen flex-shrink-0'>
      <div className='hidden lg:grid w-1/2 lg:mt-0 bg-auth-bg bg-no-repeat bg-cover bg-center h-screen place-items-center'>
        {pathname === '/register' ? <RegisterAuthMessage /> : <LoginAuthMessage />}
      </div>
      <motion.div className='lg:w-3/4 lg:mt-0'>
        <Outlet />
      </motion.div>
    </motion.div>
  );
};

export default AuthLayout;

const LoginAuthMessage = () => {
  return (
    <div className=''>
      <p className='text-2xl font-semibold text-white capitalize'>
        login to continue shopping with us
      </p>
    </div>
  );
};

const RegisterAuthMessage = () => {
  return (
    <div>
      <p className='text-2xl font-semibold text-white capitalize'>
        sign up to continue shopping with us
      </p>
    </div>
  );
};
