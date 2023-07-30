import { Meta, Story } from '@storybook/react/types-6-0';
import { Info, InfoProps } from '.';
import mock from 'components/CardIcons/mock';

export default {
  title: 'Info',
  component: Info,
  args: { realState: mock },
} as Meta<InfoProps>;

export const Template: Story<InfoProps> = (args) => {
  return (
    <div>
      <Info {...args} />
    </div>
  );
};
