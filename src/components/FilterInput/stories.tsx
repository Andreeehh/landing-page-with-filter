import { Meta, Story } from '@storybook/react/types-6-0';
import { FilterInput, FilterInputProps } from '.';

export default {
  title: 'FilterInput',
  component: FilterInput,
} as Meta<FilterInputProps>;

export const Template: Story<FilterInputProps> = (args) => {
  return (
    <div>
      <FilterInput {...args} />
    </div>
  );
};
