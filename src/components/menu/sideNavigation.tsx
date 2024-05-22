import { NavLink, useNavigate } from 'react-router-dom';
import { GraphLineIcon, PartnerIcon, SalesIcon, ShopIcon, UserIcon } from '../icons';
import { Button } from '@material-tailwind/react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../utils';

export const Navigation = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigation = [
    {
      to: '/shop',
      name: 'Shop',
      current: true,
      icon: <ShopIcon />,
    },
    {
      to: '/partner',
      name: 'Partnership',
      current: true,
      icon: <PartnerIcon />,
    },
    {
      to: '/',
      name: 'Statistics',
      current: true,
      icon: <GraphLineIcon />,
    },
    {
      to: '/',
      name: 'Sales',
      current: true,
      icon: <SalesIcon />,
    },
    {
      to: '/profile',
      name: 'Profile',
      current: true,
      icon: <UserIcon />,
    },
  ];

  const navigate = useNavigate();

  const handleActive = ({ isActive }: { isActive: boolean }) => {
    return classNames(
      isActive ? 'bg-affiliate-green/10' : '',
      'flex space-x-5 text-lg text-gray-400 hover:bg-gray-100  items-center cursor-pointer w-full transition-color p-4 rounded-lg duration-300'
    );
  };

  return (
    <nav>
      <>
        <div className='hidden lg:block w-1/4 fixed left-0 top-0 bg-white h-screen px-10 z-10'>
          <div className='mt-32'>
            <Button
              placeholder='add button'
              onClick={() => navigate('/add-product')}
              className='flex items-center capitalize space-x-5 bg-affiliate-green/10 px-4 py-4 rounded-lg w-full justify-center shadow-sm hover:shadow-sm'>
              <PlusIcon className='h-9 w-9 text-affiliate-green' />
              <span className='text-affiliate-green text-base sm:text-sm lg:text-lg '>
                Add Product
              </span>
            </Button>
            <ul className='space-y-14 mt-11'>
              {navigation.map((items) => {
                return (
                  <li key={items.name}>
                    <NavLink
                      to={items.to}
                      aria-current={items.current ? 'page' : undefined}
                      className={handleActive}>
                      {items.icon}
                      <span>{items.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className={classNames(
            open ? 'translate-x-0' : '-translate-x-full',
            'lg:hidden w-[32rem] fixed left-0 top-0 bg-white h-screen px-10 z-20 transition-transform duration-300'
          )}>
          <button
            className='absolute right-8 top-6 inline-flex items-center justify-center rounded-md p-2 bg-gray-100  text-gray-900'
            onClick={() => setOpen((prev) => !prev)}>
            <span className='sr-only'>Open main menu</span>
            <XMarkIcon className='block h-10 w-10' aria-hidden='true' />
          </button>
          <div className='mt-24'>
            <Button
              placeholder='plus button'
              onClick={() => navigate('/add-product')}
              className='inline-flex lowercase items-center space-x-5 bg-affiliate-green/10 px-4 py-4 rounded-lg  justify-center'>
              <PlusIcon className='h-10 w-10 text-affiliate-green' />
            </Button>
            <ul className='space-y-14 mt-11'>
              {navigation.map((items) => {
                return (
                  <li key={items.name}>
                    <NavLink
                      to={items.to}
                      aria-current={items.current ? 'page' : undefined}
                      className={handleActive}>
                      {items.icon}
                      <span>{items.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    </nav>
  );
};
