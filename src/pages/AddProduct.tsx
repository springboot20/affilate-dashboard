import { Tabs, TabsBody, TabPanel } from '@material-tailwind/react';
import { useState } from 'react';
import { Upload } from './product-form/Upload';
import { Add } from './product-form/Add';
import { classNames } from '../utils';
import { motion } from 'framer-motion';
import { CompleteModal } from '../components/modal/Completed';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [completed, setCompleted] = useState<boolean>(false);

  const navigate = useNavigate();

  const motionConfig = {
    initial: {
      opacity: 0,
      scale: 0,
      x: 0,
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

  const completeHandler = () => {
    setCompleted((prev) => !prev);
    navigate('/shop');
  };

  return (
    <motion.div {...motionConfig}>
      <section
        className={classNames(
          'mx-auto lg:px-0 mt-28',
          completed ? 'place-content-center sm:place-items-center mt-0' : 'sm:place-items-center',
          'grid overflow-hidden'
        )}>
        {completed ? (
          <div className='fixed left-0 right-0 top-0 bg-black/30 backdrop-blur-md z-10 h-screen flex items-center justify-center'>
            <button className='group p-4 absolute top-10 right-6 border rounded-md hover:bg-gray-100 transition-all'>
              <span className='sr-only'> close</span>
              <XMarkIcon
                className='h-7 stroke-[3]  text-white group-hover:text-gray-800 transition-all'
                onClick={completeHandler}
              />
            </button>
            <motion.div {...motionConfig}>
              <CompleteModal />
            </motion.div>
          </div>
        ) : (
          <Tabs value={activeTab} className='overflow-visible'>
            <TabsBody
              placeholder='tab body'
              className='!overflow-x-hidden'
              animate={{
                initial: {
                  x: activeTab === 'add' ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: activeTab === 'add' ? 400 : -400,
                },
              }}>
              <TabPanel value={'add'} className='p-0'>
                <Add setActiveTab={setActiveTab} />
              </TabPanel>
              <TabPanel value={'upload'} className='p-0'>
                <Upload setActiveTab={setActiveTab} setCompleted={setCompleted} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        )}
      </section>
    </motion.div>
  );
};

export default AddProduct;
