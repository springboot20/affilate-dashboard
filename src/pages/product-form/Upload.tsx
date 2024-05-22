import { Button, Typography, Card, CardBody, Tab, CardHeader } from '@material-tailwind/react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export const Upload = ({
  setActiveTab,
  setCompleted,
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [uploadsImageFiles, setUploadImagesFiles] = useState<File[]>([]);

    const config = {
      initial: {
        opacity: 0,
        scale: 0,
        x: 0,
        visible: true,
        hidden: true,
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

  
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const max_image_to_upload = 5;

  const acceptedImageExtensions = ['jpeg', 'jpg', 'png'];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileExt = file.name.split('.')[1];

      if (acceptedImageExtensions && acceptedImageExtensions.includes(fileExt)) {
        if (uploadsImageFiles.length > max_image_to_upload) {
          toast(
            `Number of images selected to upload is larger than the required number ${max_image_to_upload}`,
            { type: 'error' }
          );
        } else {
          setUploadImagesFiles((prevImages) => [file, ...prevImages]);
        }
      }

      console.log(fileExt);
    }
  };

  const handleImageRemove = (filename: File): void => {
    setUploadImagesFiles([...uploadsImageFiles.filter((file) => file !== filename)]);
  };

  console.log(uploadsImageFiles);

  return (
    <Card className='bg-white w-[44rem] p-9' placeholder={undefined}>
      <Tab value='add' className='bg-transparent flex justify-start' placeholder='previous tab'>
        <Button
          size='lg'
          className='bg-gray-400 capitalize'
          placeholder='previous button'
          onClick={() => setActiveTab('add')}>
          Previous
        </Button>
      </Tab>
      <CardBody placeholder={undefined}>
        <Typography placeholder='title' as='h2' className='my-5 text-xl text-gray-400'>
          Upload product images
        </Typography>
        <motion.div
          layout
          variants={gridVariants}
          {...config}
          className='grid grid-cols-2 gap-8 place-content-center place-items-center mt-8'>
          {uploadsImageFiles &&
            uploadsImageFiles.map((image) => {
              return (
                <motion.div layout>
                  <Card
                    key={image.name}
                    placeholder='product image card'
                    className='relative overflow-hidden h-56 w-72 shadow-sm rounded-2xl bg-[#f2f2f2] hover:before:absolute hover:before:h-full hover:before:w-full hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bg-black/30 hover:before:z-20 transition-colors duration-200 delay-150 group cursor-pointer'>
                    <CardHeader
                      placeholder='product image container'
                      className='m-0 top-0 bottom-0 h-full absolute'
                      shadow={false}>
                      <img
                        src={URL.createObjectURL(image)}
                        className='h-full object-center aspect-auto max-w-full'
                      />
                    </CardHeader>
                    <CardBody placeholder='' className='absolute h-full w-full'>
                      <button
                        onClick={() => handleImageRemove(image)}
                        className='group-hover:opacity-100 opacity-0 z-30 absolute bottom-4 right-4 h-10 w-16 flex justify-center items-center rounded-md bg-black/40'>
                        <TrashIcon className='h-6 w-6 stroke-[3] text-white' />
                      </button>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          <motion.div
            layout
            className='h-56 w-72 shadow-sm rounded-2xl bg-[#f2f2f2] flex justify-center items-center'>
            <input hidden type='file' id='upload' onChange={handleImageUpload} multiple />
            <Button placeholder='add button' variant='text'>
              <label htmlFor='upload'>
                <PlusIcon className='h-14 text-gray-400' />
              </label>
            </Button>
          </motion.div>
        </motion.div>
        <Button
          fullWidth
          placeholder='complete button'
          onClick={() => setCompleted((prevState) => !prevState)}
          className='bg-affiliate-green capitalize rounded-3xl text-center text-white text-xl py-4 px-3 mt-10'>
          <span>Complete</span>
        </Button>
      </CardBody>
    </Card>
  );
};