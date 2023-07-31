import { TextField } from '@mui/material';
import * as Styled from './styles';

export type FilterInputProps = {
  name: string;
  type: 'text' | 'number';
  value: string;
  filterValues: { [key: string]: string };
  setFilterValues: (filterValues: { [key: string]: string }) => void;
  labelName: string;
};

export const FilterInput = ({
  type,
  name,
  value,
  filterValues,
  setFilterValues,
  labelName,
}: FilterInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterValues({ ...filterValues, [name]: value });
  };
  return (
    <Styled.Wrapper>
      <TextField
        label={labelName}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={`Filtro por ${labelName}`}
        style={{ width: '100%' }}
      />
    </Styled.Wrapper>
  );
};
