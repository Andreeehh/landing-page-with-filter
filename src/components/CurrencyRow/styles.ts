import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center; /* Align items vertically */
    justify-content: center; /* Align items horizontally */
    gap: 4rem; /* Add some spacing between the icon and the text */
    font-size: ${theme.font.sizes.small};
    border: solid 1px ${theme.colors.darkText};
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 2%;
    background: ${theme.colors.secondary};
    padding: 1rem 0;
  `}
`;

export const Label = styled.label`
  display: flex;
  align-items: center; /* Align items vertically */
  gap: 0.8rem; /* Add some spacing between the icon and the text */
`;
