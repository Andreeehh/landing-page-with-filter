import { Meta, Story } from '@storybook/react';
import { SearchButton } from '.';

export default {
  title: 'SearchButton',
  component: SearchButton,
  args: {
    children: 'SearchButton',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <SearchButton {...args} />
    </div>
  );
};
