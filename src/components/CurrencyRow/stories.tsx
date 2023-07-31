import { Meta, Story } from '@storybook/react/types-6-0';
import { CurrencyRow, CurrencyRowProps } from '.';

export default {
  title: 'CurrencyRow',
  component: CurrencyRow,
  args: {
    rentalValue: 1450.85,
    purchaseValue: 1250000,
  },
} as Meta<CurrencyRowProps>;

export const Template: Story<CurrencyRowProps> = (args) => {
  return (
    <div>
      <CurrencyRow {...args} />
    </div>
  );
};

export const NoValues: Story<CurrencyRowProps> = () => {
  return (
    <div>
      <CurrencyRow />
    </div>
  );
};
