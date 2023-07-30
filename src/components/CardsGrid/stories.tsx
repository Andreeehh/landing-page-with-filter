import { Meta, Story } from '@storybook/react/types-6-0';
import { CardsGrid, CardsGridProps } from '.';

export default {
  title: 'CardsGrid',
  component: CardsGrid,
} as Meta<CardsGridProps>;

export const Template: Story<CardsGridProps> = (args) => {
  return (
    <div>
      <CardsGrid {...args} />
    </div>
  );
};
