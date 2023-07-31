import { StrapiRealState } from 'shared-typed/strapi-real-state';
import { Bed } from '@styled-icons/material-outlined/Bed';
import { Blueprint } from '@styled-icons/simple-icons/Blueprint';
import { Shower } from '@styled-icons/fa-solid/Shower';
import { CarSport } from '@styled-icons/ionicons-outline/CarSport';
import * as Styled from './styles';

export type CardIconsProps = {
  realState: StrapiRealState;
};

export const CardIcons = ({ realState }: CardIconsProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Label title="Tamanho do imóvel em m²">
        <Styled.IconWrapper>
          <Blueprint />
        </Styled.IconWrapper>
        {realState.attributes.size}
      </Styled.Label>
      <Styled.Label title="Quantidade de quartos">
        <Styled.IconWrapper>
          <Bed />
        </Styled.IconWrapper>
        {realState.attributes.bedrooms}
      </Styled.Label>
      <Styled.Label title="Quantidade de banheiros">
        <Styled.IconWrapper>
          <Shower />
        </Styled.IconWrapper>
        {realState.attributes.bathrooms}
      </Styled.Label>
      <Styled.Label title="Quantidade de vagas">
        <Styled.IconWrapper>
          <CarSport />
        </Styled.IconWrapper>
        {realState.attributes.parkingSpaces}
      </Styled.Label>
    </Styled.Wrapper>
  );
};
