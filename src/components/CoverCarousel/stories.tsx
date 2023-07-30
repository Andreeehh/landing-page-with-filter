import { Meta, Story } from '@storybook/react/types-6-0';
import { CoverCarousel, CoverCarouselProps } from '.';
import mock from './mock';

export default {
  title: 'CoverCarousel',
  component: CoverCarousel,
  args: {
    images: mock,
  },
} as Meta<CoverCarouselProps>;

export const Template: Story<CoverCarouselProps> = (args) => {
  return (
    <div>
      <CoverCarousel {...args} />
    </div>
  );
};
