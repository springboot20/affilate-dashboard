import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Navigation } from '../components/menu/sideNavigation';
import { NavBar } from '../components/menu/NavBar';

const AppLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full flex justify-between items-stretch h-screen flex-shrink-0'>
      <Navigation open={open} setOpen={setOpen} />
      <main className='w-3/4 mt-28 lg:mt-0'>
        <div className='w-full min-h-screen absolute justify-between lg:relative left-0 right-0'>
          <NavBar setOpen={setOpen} />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
