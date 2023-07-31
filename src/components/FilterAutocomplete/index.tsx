import { Autocomplete, TextField } from '@mui/material';

export type FilterAutocompleteProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  options: string[];
};

export const FilterAutocomplete = ({
  name,
  label,
  value,
  onChange,
  disabled = false,
  placeholder = '',
  options,
}: FilterAutocompleteProps) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      inputValue={value}
      onInputChange={(_, newInputValue) => onChange(newInputValue)}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
        />
      )}
    />
  );
};
