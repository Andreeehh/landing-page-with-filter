import * as Styled from './styles';
import { Search } from '@styled-icons/material-outlined/Search';

type SearchButtonProps = {
  onClick?: () => void;
};

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <Styled.Container aria-label="Buscar" title="Buscar" onClick={onClick}>
      <Search />
    </Styled.Container>
  );
};
