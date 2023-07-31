import { StrapiRealState } from 'shared-typed/strapi-real-state';
import * as Styled from './styles';
import { CoverCarousel } from 'components/CoverCarousel';
import Link from 'next/link';
import { Heading } from 'components/Heading';
import { Info } from 'components/Info';
import { CardIcons } from 'components/CardIcons';
import { CurrencyRow } from 'components/CurrencyRow';

export type CardProps = {
  realState: StrapiRealState;
};

export const Card = ({ realState }: CardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${realState.attributes.slug}`}>
        <CoverCarousel images={realState.attributes.cover}></CoverCarousel>
      </Link>
      <Heading size="small" as="h4">
        {realState.attributes.city}, {realState.attributes.neighborhood}
      </Heading>
      <Info infoValue={realState.attributes.streetName}></Info>
      <CardIcons realState={realState}></CardIcons>
      <CurrencyRow
        rentalValue={
          realState.attributes.rentalValue
            ? realState.attributes.rentalValue
            : null
        }
        purchaseValue={
          realState.attributes.purchaseValue
            ? realState.attributes.purchaseValue
            : null
        }
      ></CurrencyRow>
    </Styled.Wrapper>
  );
};
