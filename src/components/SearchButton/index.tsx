import * as Styled from './styles';
import { Search } from '@styled-icons/material-outlined/Search';

export const SearchButton = () => {
  return (
    <Styled.Container aria-label="Buscar" title="Buscar">
      <Search />
    </Styled.Container>
  );
};
