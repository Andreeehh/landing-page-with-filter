import { GetStaticPaths, GetStaticProps } from 'next';
import { loadRealStates, LoadRealStatesVariables } from 'api/load-real-states';
import { StrapiRealStates } from 'shared-typed/strapi-real-satates';
import { StrapiSettingResponse } from 'shared-typed/strapi-setting-response';
import { CardsTemplate } from 'templates/CardsTemplate';

export type RealEstatePageProps = {
  realStates?: StrapiRealStates;
  setting?: StrapiSettingResponse;
  variables?: LoadRealStatesVariables;
};

export default function RealEstatePage({
  realStates,
  setting,
  variables,
}: RealEstatePageProps) {
  return (
    <CardsTemplate
      realStates={realStates}
      setting={setting}
      variables={variables}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<RealEstatePageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;

  // Extrair valores da slug (por exemplo, bedrooms=4&bathrooms=2)
  const slugValues = slug.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    const decodedValue = decodeURIComponent(value);
    // Tentar converter o valor para número se possível
    const numericValue = /^\d+$/.test(decodedValue)
      ? parseInt(decodedValue, 10)
      : decodedValue;

    return {
      ...acc,
      [key]: numericValue,
    };
  }, {});

  // Combine os valores da slug com as variáveis padrão
  const variables: LoadRealStatesVariables = {
    ...slugValues,
    // Adicione outras variáveis padrão, se necessário
    start: 0,
    limit: 9,
    sort: ['createdAt:desc'],
  };

  let data: RealEstatePageProps | null = null;

  try {
    data = await loadRealStates(variables);
  } catch (error) {
    data = null;
    console.log(error);
  }
  if (!data || !data.setting || !data.realStates) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      realStates: data.realStates,
      setting: data.setting,
      variables,
    },
    revalidate: 24 * 60,
  };
};
