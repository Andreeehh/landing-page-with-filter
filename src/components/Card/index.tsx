import { StrapiRealState } from 'shared-typed/strapi-real-state';
import * as Styled from './styles';
import { CoverCarousel } from 'components/CoverCarousel';
import Link from 'next/link';
import { Heading } from 'components/Heading';
import { Info } from 'components/Info';
import { CardIcons } from 'components/CardIcons';

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
      <Info realState={realState}></Info>
      <CardIcons realState={realState}></CardIcons>
    </Styled.Wrapper>
  );
};
