import { Meta, Story } from '@storybook/react/types-6-0';
import { CurrencyRow, CurrencyRowProps } from '.';

export default {
  title: 'CurrencyRow',
  component: CurrencyRow,
} as Meta<CurrencyRowProps>;

export const Template: Story<CurrencyRowProps> = (args) => {
  return (
    <div>
      <CurrencyRow {...args} />
    </div>
  );
};
