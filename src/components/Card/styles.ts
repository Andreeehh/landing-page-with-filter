import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  width: 100%;
  border: solid 0px ${theme.colors.darkText};
  border-radius: 2%;
  background: ${theme.colors.gray1};
  margin: 0 auto;
  a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      opacity: 0.8;
    }
  `}
`;
