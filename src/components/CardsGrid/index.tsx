import { StrapiRealStates } from 'shared-typed/strapi-real-satates';
import * as Styled from './styles';
import { Card } from 'components/Card';

export type CardsGridProps = {
  realStates: StrapiRealStates;
};

export const CardsGrid = ({ realStates }: CardsGridProps) => {
  return (
    <Styled.Wrapper>
      {!realStates.data ||
        (realStates.data.length == 0 && (
          <Styled.NotFound>Nenhum post encontrado aqui =(</Styled.NotFound>
        ))}

      <Styled.Grid>
        {realStates.data &&
          realStates.data.length > 0 &&
          realStates.data.map((realState) => (
            <Card key={`p1-${realState.id}`} realState={realState} />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
