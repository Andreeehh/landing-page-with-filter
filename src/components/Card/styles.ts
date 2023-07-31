import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  width: 100%;
  border: solid 1px ${theme.colors.darkText};
  border-radius: 2%;

  margin: 0 auto;
  `}
`;
