import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    font-size: ${theme.font.sizes.small};
    border: solid 0px ${theme.colors.darkText};
    border-radius: 2%;
    background: ${theme.colors.gray5};
    padding: 1rem 0;
  `}
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
