import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
      width: 100%;
      height: 20rem;
      display:block;
      margin-bottom: ${theme.spacings.medium}
    `}
`;
