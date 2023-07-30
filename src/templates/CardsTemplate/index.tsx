import { RealStatesTemplateProps } from 'pages';
import * as Styled from './styles';
import { loadRealStates } from 'api/load-real-states';
import { Base } from 'templates/Base';
import { useState, useEffect } from 'react';
import { CardsGrid } from 'components/CardsGrid';

export type CardsTemplateProps = RealStatesTemplateProps;

export const CardsTemplate = ({
  realStates,
  variables,
}: CardsTemplateProps) => {
  const [stateRealStates, setStateRealStates] = useState(realStates);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMoreRealStates, setNoMoreRealStates] = useState(false);

  useEffect(() => {
    setStateRealStates(realStates);
    setNoMoreRealStates(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [realStates, variables]);

  const handleLoadMoreRealStates = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const moreRealStates = await loadRealStates(newVariables);
    if (
      !moreRealStates ||
      !moreRealStates.realStates ||
      !moreRealStates.realStates.data.length ||
      moreRealStates.realStates.data.length == 0
    ) {
      setNoMoreRealStates(true);
      return;
    }
    setButtonDisabled(false);
    setStateVariables(newVariables);
    moreRealStates.realStates.data.forEach((post) => {
      stateRealStates.data.push(post);
    });
    setStateRealStates(stateRealStates);
  };

  return (
    <Base>
      {/* <PostGrid RealStates={stateRealStates}></PostGrid> */}
      <CardsGrid realStates={stateRealStates}></CardsGrid>

      {stateRealStates && stateRealStates.data.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            onClick={handleLoadMoreRealStates}
            disabled={buttonDisabled}
          >
            {noMoreRealStates ? 'Sem mais Imóveis' : 'Carregar mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </Base>
  );
};
