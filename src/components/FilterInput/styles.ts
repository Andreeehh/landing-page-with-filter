import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    justify-content: space-between;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.primary};
  `}
`;

export const FilterInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${theme.colors.mediumGray};
    border-radius: 2%;
    font-size: ${theme.font.sizes.small};

    ::placeholder {
      color: ${theme.colors.mediumGray};
    }
  `}
`;
