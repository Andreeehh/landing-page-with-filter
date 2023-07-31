import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: center; /* Align items horizontally */
  gap: 4rem; /* Add some spacing between the icon and the text */
  font-size: ${theme.font.sizes.small};
  margin: 10px 0;
  `}
`;

export const Label = styled.label`
  display: flex;
  align-items: center; /* Align items vertically */
  gap: 0.8rem; /* Add some spacing between the icon and the text */
`;

export const IconWrapper = styled.div`
  /* Adjust the width and height of the icon container as needed */
  width: 2.5rem;
  height: 2.5rem;
`;
