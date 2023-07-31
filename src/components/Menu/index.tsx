import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';
import { LogoLink } from 'components/LogoLink';
import { useEffect, useState } from 'react';
import { FilterInput, FilterInputProps } from 'components/FilterInput';
import { fetchCities } from 'api/load-cities';
import { fetchNeighborhoods } from 'api/load-neighborhoods';
import { FilterAutocomplete } from 'components/FilterAutocomplete';

export type MenuProps = {
  realStateName: string;
  logo: string;
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

  useEffect(() => {
    const fetchNeighborhoodsData = async () => {
      const neighborhoodsData = await fetchNeighborhoods(cities[filters.city]);
      setNeighborhoods(neighborhoodsData);
    };
    if (cities[filters.city]) {
      fetchNeighborhoodsData();
    }
  }, [cities, filters.city]);

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCLoseMenu}
      >
        {!menuVisible && <MenuIcon aria-label="OpenMenu" />}
        {menuVisible && <CloseIcon aria-label="OpenMenu" />}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={realStateName} srcImg={logo} />
          </Styled.Logo>

          {/* City filter as a combobox */}
          <FilterAutocomplete
            label="Cidade"
            value={filters.city}
            onChange={(newValue) => handleFilterChange('city', newValue)}
            placeholder="Filtro por cidade..."
            options={Object.keys(cities)}
          />

          {filters.city && neighborhoods.length > 0 && (
            <FilterAutocomplete
              label="Bairro"
              value={filters.neighborhood}
              onChange={(newValue) =>
                handleFilterChange('neighborhood', newValue)
              }
              placeholder="Filtro por bairro..."
              options={neighborhoods}
            />
          )}

          <FilterInput
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            filterValues={filters}
            setFilterValues={(filterValues) =>
              handleFilterChange('bedrooms', filterValues.bedrooms)
            }
            labelName="Quartos"
          />

          <FilterInput
            type="number"
            name="bathrooms"
            value={filters.bathrooms}
            filterValues={filters}
            setFilterValues={(filterValues) =>
              handleFilterChange('bathrooms', filterValues.bathrooms)
            }
            labelName="Banheiros"
          />

          <FilterInput
            type="number"
            name="parkingSpaces"
            value={filters.parkingSpaces}
            filterValues={filters}
            setFilterValues={(filterValues) =>
              handleFilterChange('parkingSpaces', filterValues.parkingSpaces)
            }
            labelName="Vagas"
          />
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
