import * as Styled from './styles';

export type CurrencyRowProps = {
  title?: string;
};

export const CurrencyRow = ({ title }: CurrencyRowProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
