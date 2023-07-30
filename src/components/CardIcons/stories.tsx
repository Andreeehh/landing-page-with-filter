import { Meta, Story } from '@storybook/react/types-6-0';
import { CardIcons, CardIconsProps } from '.';
import mock from './mock';

export default {
  title: 'CardIcons',
  component: CardIcons,
  args: {
    realState: mock,
  },
} as Meta<CardIconsProps>;

export const Template: Story<CardIconsProps> = (args) => {
  return (
    <div>
      <CardIcons {...args} />
    </div>
  );
};
