import { Meta, Story } from '@storybook/react/types-6-0';
import { Card, CardProps } from '.';
import mock from './mock';

export default {
  title: 'Card',
  component: Card,
  args: {
    realState: mock,
  },
} as Meta<CardProps>;

export const Template: Story<CardProps> = (args) => {
  return (
    <div>
      <Card {...args} />
    </div>
  );
};
