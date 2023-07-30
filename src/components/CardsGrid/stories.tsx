import { Meta, Story } from '@storybook/react/types-6-0';
import { CardsGrid, CardsGridProps } from '.';
import mock from './mock';

export default {
  title: 'CardsGrid',
  component: CardsGrid,
  args: {
    realStates: mock,
  },
} as Meta<CardsGridProps>;

export const Template: Story<CardsGridProps> = (args) => {
  return (
    <div>
      <CardsGrid {...args} />
    </div>
  );
};

export const NoPosts: Story<CardsGridProps> = () => {
  return <div>Sem imoveis encontrados </div>;
};
