import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { classNames } from '../../utils';

export const CustomCarousel: React.FC<{
  card: {
    id: string;
    header: JSX.Element;
    description: string;
  };
  activeRefs: React.MutableRefObject<HTMLDivElement[]>;
  index: number;
  active: boolean;
  setSliderWidth: React.Dispatch<React.SetStateAction<string>>;
}> = ({ card, active, activeRefs, index, setSliderWidth }) => {
  return (
    <Card
      ref={(el) => {
        el && (activeRefs.current[index] = el);
        setSliderWidth(
          () => `calc(${Number(activeRefs.current[index].style['width'].slice(0, 3)) * 3}px)`
        );
      }}
      placeholder='carousel card'
      className={classNames('border')}
      style={{ width: '626px' }}
      data-active={active}>
      <CardHeader
        placeholder='carousel header'
        shadow={false}
        className='p-0 m-0 h-72 rounded-t-xl bg-[#f2f2f2] rounded-b-none flex justify-center items-center'>
        {card.header}
      </CardHeader>
      <CardBody placeholder='carousel card body'>
        <Typography placeholder='carousel description'>{card.description}</Typography>
      </CardBody>
    </Card>
  );
};
