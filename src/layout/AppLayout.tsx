import { NavLink, Outlet } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Bars3Icon, CogIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '../utils';
import { BellIcon, HomePlusIcon, FilterIcon } from '../components/icons';
import { Button } from '@material-tailwind/react';
import { Navigation } from '../components/menu/sideNavigation';
import { Input } from '../components/input/Input';

const AppLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full flex justify-between items-stretch h-screen flex-shrink-0'>
      <Navigation open={open} setOpen={setOpen} />
      <main className='w-3/4 mt-28 lg:mt-0'>
        <div className='w-full min-h-screen absolute justify-between lg:relative left-0 right-0'>
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
                <div className='flex md:justify-start w-full md:w-auto items-center space-x-3'>
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
                    className='lowercase text-white inline-flex items-center space-x-3 flex-shrink-0 px-4 py-1.5 justify-center rounded-lg bg-affiliate-green'>
                    <span className='sm:text-xl'>Filter</span>
                    <FilterIcon />
                  </Button>
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
                                to='/auth/register'
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
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
