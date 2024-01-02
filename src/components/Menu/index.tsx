import { Search as Search } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';
import { LogoLink } from 'components/LogoLink';
import { useEffect, useState } from 'react';
import { TextInput } from 'components/TextInput';
import { fetchCities } from 'api/load-cities';
import { fetchNeighborhoods } from 'api/load-neighborhoods';
import { FilterAutocomplete } from 'components/FilterAutocomplete';
import { Button } from 'templates/CardsTemplate/styles';
import { SearchButton } from 'components/SearchButton';

export type MenuProps = {
  realStateName: string;
  logo: string;
};

export type FilterInputProps = {
  name: string;
  type: 'text' | 'number';
  value: string;
  filterValues: { [key: string]: string };
  setFilterValues: (filterValues: { [key: string]: string }) => void;
  label: string;
};

export const Menu = ({ realStateName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [neighborhoods, setNeighborhoods] = useState<string[]>([]);
  const [cities, setCities] = useState<{ [name: string]: string }>({});

  const handleOpenCLoseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  const [filters, setFilters] = useState<FilterInputProps['filterValues']>({
    neighborhood: '',
    city: '',
    bedrooms: '',
    bathrooms: '',
    parkingSpaces: '',
  });

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  useEffect(() => {
    const fetchCitiesData = async () => {
      const citiesData = await fetchCities();
      setCities(citiesData);
    };
    fetchCitiesData();
  }, []);

  //Aguardar fetch de bairros
  // useEffect(() => {
  //   const fetchNeighborhoodsData = async () => {
  //     const neighborhoodsData = await fetchNeighborhoods(cities[filters.city]);
  //     setNeighborhoods(neighborhoodsData);
  //   };
  //   console.log('cities[filters.city]');
  //   console.log(cities[filters.city]);
  //   if (cities[filters.city]) {
  //     fetchNeighborhoodsData();
  //   }
  // }, [cities, filters.city]);

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCLoseMenu}
      >
        {!menuVisible && <Search aria-label="OpenFilters" />}
        {menuVisible && <CloseIcon aria-label="OpenFilters" />}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={realStateName} srcImg={logo} />
          </Styled.Logo>

          {/* City filter as a combobox */}
          {/* <FilterAutocomplete
            label="Cidade"
            value={filters.city}
            onChange={(newValue) => handleFilterChange('city', newValue)}
            placeholder="Filtro por cidade..."
            options={Object.keys(cities)}
          /> */}

          {/* {filters.city && neighborhoods.length > 0 && (
            <FilterAutocomplete
              label="Bairro"
              value={filters.neighborhood}
              onChange={(newValue) =>
                handleFilterChange('neighborhood', newValue)
              }
              placeholder="Filtro por bairro..."
              options={neighborhoods}
            />
          )} */}

          {/* Bedrooms filter */}
          <TextInput
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            onInputChange={(event) =>
              handleFilterChange('bedrooms', event as string)
            }
            label="Quartos"
          />

          {/* Bathrooms filter */}
          <TextInput
            type="number"
            name="bathrooms"
            value={filters.bathrooms}
            onInputChange={(event) =>
              handleFilterChange('bathrooms', event as string)
            }
            label="Banheiros"
          />

          {/* Parking spaces filter */}
          <TextInput
            type="number"
            name="parkingSpaces"
            value={filters.parkingSpaces}
            onInputChange={(event) =>
              handleFilterChange('parkingSpaces', event as string)
            }
            label="Vagas"
          />
          <SearchButton></SearchButton>
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
