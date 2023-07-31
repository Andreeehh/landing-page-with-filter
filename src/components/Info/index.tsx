import * as Styled from './styles';

export type InfoProps = {
  infoValue: string;
};

export const Info = ({ infoValue }: InfoProps) => {
  return (
    <Styled.Wrapper>
      <p style={{ margin: 0 }}>{infoValue}</p>
    </Styled.Wrapper>
  );
};
