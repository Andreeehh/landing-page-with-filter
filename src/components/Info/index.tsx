import { StrapiRealState } from 'shared-typed/strapi-real-state';
import * as Styled from './styles';

export type InfoProps = {
  realState: StrapiRealState;
};

export const Info = ({ realState }: InfoProps) => {
  return (
    <Styled.Wrapper>
      <p>{realState.data.attributes.streetName}</p>
    </Styled.Wrapper>
  );
};
