import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.deepBlack};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    bottom: 2rem;
    right: 2rem;
    svg {
    width: 4.5rem;
    height: 4.5rem;
    text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
  }
  &:hover svg {
      opacity: 0.8;
      color: ${theme.colors.secondary};
      cursor: pointer;
    }
  `}
`;
