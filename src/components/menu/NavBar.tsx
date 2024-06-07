import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import { Bars3Icon, CogIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '../../utils';
import { BellIcon, HomePlusIcon, FilterIcon } from '../icons';
import { Button } from '@material-tailwind/react';
import { Input } from '../input/Input';

export const NavBar: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  return (
    <header className='fixed lg:sticky top-0 right-0 left-0 h-28 bg-white shadow-sm z-10'>
      <div className='flex justify-between items-center space-x-6 py-4 px-6 h-full'>
        <div className='flex space-x-20 items-center flex-1 w-full'>
          <div className='absolute inset-y-0  flex items-center lg:hidden'>
            {/* Mobile menu button*/}
            <Button
              placeholder='menu button'
              className='inline-flex items-center justify-center rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              variant='outlined'
              onClick={() => setOpen((prev) => !prev)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='block h-10 w-10' aria-hidden='true' />
            </Button>
          </div>

          {/* <div className='flex items-center md:w-1/3 flex-shrink-0'> */}
          <div className='flex md:justify-start w-full md:w-auto items-center space-x-2 ml-2  '>
            <div className='relative min-w-[25rem] md:min-w-[32rem]'>
              <div className='grid place-items-center h-5 w-5 absolute top-1/2 -translate-y-1/2 left-4 z-10'>
                <HomePlusIcon className='absolute' />
              </div>
              <Input
                type='text'
                placeholder='Search...'
                className='relative rounded-lg h-auto py-5 pl-14 pr-4 min-w-full bg-[#f2f2f2] text-base text-gray-600  focus:outline-0 !border-t-gray-500 !border-gray-500'
              />
            </div>
            <Button
              placeholder='filter button'
              type='button'
              className='lowercase text-white hidden md:inline-flex items-center space-x-3 flex-shrink-0 px-4 py-1.5 justify-center rounded-lg bg-affiliate-green'>
              <span className='sm:text-xl'>Filter</span>
              <FilterIcon />
            </Button>

            <button
              type='button'
              className='lowercase inline-flex md:hidden items-center flex-shrink-0 justify-center'>
              <span className='sr-only'>Filter</span>
              <svg
                width='35'
                height='33'
                viewBox='0 0 36 35'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className={'fill-affiliate-green h-10'}>
                <path
                  d='M14.6661 19.984C16.6082 19.984 18.1825 21.5583 18.1825 23.5003C18.1825 25.4424 16.6082 27.0167 14.6661 27.0167C12.7241 27.0167 11.1498 25.4424 11.1498 23.5003C11.1498 21.5583 12.7241 19.984 14.6661 19.984Z'
                  fill='#05CE81'
                />
                <path
                  d='M20.5268 8.2627C18.5847 8.2627 17.0104 9.83703 17.0104 11.7791C17.0104 13.7211 18.5847 15.2955 20.5268 15.2955C22.4688 15.2955 24.0432 13.7211 24.0432 11.7791C24.0432 9.83703 22.4688 8.2627 20.5268 8.2627Z'
                  fill='#05CE81'
                />
                <path
                  d='M14.0801 10.8514C14.5656 10.8514 14.9592 11.2449 14.9592 11.7305C14.9592 12.216 14.5656 12.6096 14.0801 12.6096L5.87519 12.6096C5.38968 12.6096 4.99609 12.216 4.99609 11.7305C4.99609 11.2449 5.38968 10.8514 5.87519 10.8514H14.0801Z'
                  fill='#05CE81'
                />
                <path
                  d='M21.1128 22.5726C20.6273 22.5726 20.2337 22.9662 20.2337 23.4517C20.2337 23.9372 20.6273 24.3308 21.1128 24.3308H29.3177C29.8032 24.3308 30.1968 23.9372 30.1968 23.4517C30.1968 22.9662 29.8032 22.5726 29.3177 22.5726H21.1128Z'
                  fill='#05CE81'
                />
                <path
                  d='M4.99609 23.4517C4.99609 22.9662 5.38968 22.5726 5.87519 22.5726H8.21944C8.70495 22.5726 9.09854 22.9662 9.09854 23.4517C9.09854 23.9372 8.70495 24.3308 8.21944 24.3308H5.87519C5.38968 24.3308 4.99609 23.9372 4.99609 23.4517Z'
                  fill='#05CE81'
                />
                <path
                  d='M29.3177 10.8514C29.8032 10.8514 30.1968 11.2449 30.1968 11.7305C30.1968 12.216 29.8032 12.6096 29.3177 12.6096H26.9735C26.488 12.6096 26.0944 12.216 26.0944 11.7305C26.0944 11.2449 26.488 10.8514 26.9735 10.8514H29.3177Z'
                  fill='#05CE81'
                />
              </svg>
            </button>
          </div>
        </div>

        <div className='absolute inset-y-0 right-0 flex items-center gap-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
          <div className='inline-flex items space-x-3 lg:space-x-8'>
            <button type='button' className='text-gray-400'>
              <span className='sr-only'>View notifications</span>
              <BellIcon />
            </button>

            {/* Profile dropdown */}

            <Menu as='div' className='relative'>
              <div className='flex items-start flex-shrink-0'>
                <div className='flex flex-col items-end mr-4'>
                  <Menu.Button className='flex text-gray-900'>
                    <span className='sr-only'>Open auth menu</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                      className='h-8 fill-gray-900'>
                      <path d='M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z' />
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>
                  <Menu.Items className='absolute right-4 lg:right-0 z-10 mt-20 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to='/profile'
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'inline-flex space-x-3 items-center w-full px-4 py-2 sm:text-sm text-gray-700 h-14'
                          )}>
                          <UserIcon className='h-8' />
                          <span>Profile</span>
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to='#'
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'inline-flex space-x-3 items-center w-full px-4 py-2 sm:text-sm text-gray-700 h-14'
                          )}>
                          <CogIcon className='h-8' />
                          <span>Settings</span>
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to='/register'
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'inline-flex space-x-3 items-center w-full px-4 py-2 sm:text-sm text-gray-700 h-14'
                          )}>
                          <ArrowLeftIcon className='h-8' />
                          <span>Sign out</span>
                        </NavLink>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};
