import { StrapiRealStates } from 'shared-typed/strapi-real-satates';
import * as Styled from './styles';

export type CardsGridProps = {
  realStates: StrapiRealStates;
};

export const CardsGrid = ({ realStates }: CardsGridProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
    </Styled.Wrapper>
  );
};
