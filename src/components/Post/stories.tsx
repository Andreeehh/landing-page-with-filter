import { Meta, Story } from '@storybook/react/types-6-0';
import { Post, PostProps } from '.';

export default {
  title: 'Post',
  component: Post,
  args: {
    address: 'Rua nove de Julho',
  },
} as Meta<PostProps>;

export const Template: Story<PostProps> = (args) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};
