import styled, { DefaultTheme, css } from 'styled-components';

export type RealEstateContainerProps = {
  size: 'max' | 'content';
};

const realEstateContainerStyles = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme: DefaultTheme) => css`
  max-width: ${theme.sizes.content};
  `,
};

export const RealEstateContainer = styled.div<RealEstateContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
    ${realEstateContainerStyles[size](theme)}

    img{
      width: 100%;
      max-height: 50rem;
    }

  `}
`;
