import { Tabs, TabsBody, TabPanel } from '@material-tailwind/react';
import { useState } from 'react';
import { Upload } from './product-form/Upload';
import { Add } from './product-form/Add';
import { classNames } from '../utils';
import { motion } from 'framer-motion';
import { CompleteModal } from '../components/modal/Completed';

const AddProduct = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [completed, setCompleted] = useState<boolean>(false);

  console.log(activeTab);

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

  return (
    <motion.div {...motionConfig}>
      <section
        className={classNames(
          'mx-auto mt-8 lg:px-0',
          completed
            ? 'place-content-center place-items-center h-[calc(100vh-2rem)] mt-0'
            : 'place-items-center',
          'grid overflow-hidden'
        )}>
        {completed ? (
          <motion.div {...motionConfig}>
            <CompleteModal />
          </motion.div>
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

export default AddProduct