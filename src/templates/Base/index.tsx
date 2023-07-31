import * as Styled from './styles';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ToggleTheme } from 'components/ToggleTheme';
import { Footer } from 'components/Footer';
import { GoTop } from 'components/GoTop';

import { Cancel, CheckCircleOutline } from '@styled-icons/material-outlined';

export type BaseProps = {
  children: React.ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) {
      return;
    }

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      {/* <Menu INSERIR O MENU DE FILTROS
        menuLink={setting.data.attributes.menuLink}
        blogName={setting.data.attributes.blogName}
        logo={setting.data.attributes.logo.data.attributes.url}
      /> */}
      <Styled.HeaderContainer>
        {/* <Header INSERIR A LOGO
          blogName={setting.data.attributes.blogName}
          blogDescription={setting.data.attributes.blogDescription}
          logo={setting.data.attributes.logo.data.attributes.url}
          showText={true}
        /> */}
      </Styled.HeaderContainer>

      <Styled.SearchContainer>
        <Styled.SearchInput
          type="search"
          placeholder="Encontre imóveis"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {!searchDisabled ? (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="Input enabled"
          />
        ) : (
          <Cancel className="search-cancel-icon" aria-label="Input enabled" />
        )}
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml="Feito Colab André & Gabriel" />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
