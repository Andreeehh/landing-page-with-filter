import { Heading } from 'components/Heading';
import * as Styled from './styles';
import { CoverCarousel } from 'components/CoverCarousel';
import { StrapiRealState } from 'shared-typed/strapi-real-state';

export type ArticleHeaderProps = {
  realState: StrapiRealState;
};

export const ArticleHeader = ({ realState }: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">
        {realState.attributes.streetName} - {realState.attributes.streetNumber}
      </Heading>
      <Styled.Excerpt>
        {realState.attributes.city}, {realState.attributes.neighborhood} -{' '}
        {realState.attributes.addressType}
      </Styled.Excerpt>
      <CoverCarousel images={realState.attributes.cover}></CoverCarousel>
    </Styled.Wrapper>
  );
};
