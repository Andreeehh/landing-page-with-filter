import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    bottom: 2rem;
    right: 2rem;
    svg {
    width: 4.5rem;
    height: 4.5rem;
  }
  `}
`;
