import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) =>
  css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `;

export const Title = styled.h1<
  Pick<HeadingProps, 'colorDark' | 'size' | 'uppercase'>
>`
  ${({ theme, colorDark, size, uppercase }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    line-height: 1.2;
    margin: 10px 0;
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
