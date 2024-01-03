import styled, { css, DefaultTheme } from 'styled-components';

type Background = {
  background?: boolean;
};

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    ${!!background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
