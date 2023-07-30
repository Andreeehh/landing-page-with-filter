import * as Styled from './styles';
import { Heading } from 'components/Heading';

export type PostProps = {
  address?: string;
  colorDark?: boolean;
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
};

export const Post = ({
  address,
  colorDark = true,
  size = 'small',
  uppercase = false,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <Heading>Centro, Iacanga</Heading>
      <p>{address}</p>
    </Styled.Wrapper>
  );
};
