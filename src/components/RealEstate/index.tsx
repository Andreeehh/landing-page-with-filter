import { ArticleHeader } from 'components/ArticleHeader';
import * as Styled from './styles';
import { HtmlContent } from 'components/HtmlContent';
import { RealEstateContainer } from 'components/RealEstateContainer';
import { StrapiRealState } from 'shared-typed/strapi-real-state';

export type RealEstateProps = {
  realState: StrapiRealState;
};

export const RealEstate = ({ realState }: RealEstateProps) => {
  return (
    <Styled.Wrapper>
      <RealEstateContainer size="max">
        <ArticleHeader realState={realState}></ArticleHeader>
      </RealEstateContainer>
      <RealEstateContainer size="content">
        <HtmlContent html={realState.attributes.description}></HtmlContent>
      </RealEstateContainer>
    </Styled.Wrapper>
  );
};
