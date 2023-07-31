import {
  LoadRealStatesVariables,
  defaultLoadRealStateVariables,
  loadRealStates,
} from 'api/load-real-states';
import { GetStaticProps } from 'next';
import { StrapiRealStates } from 'shared-typed/strapi-real-satates';
import { StrapiSettingResponse } from 'shared-typed/strapi-setting-response';
import { CardsTemplate } from 'templates/CardsTemplate';

export type RealStatesTemplateProps = {
  realStates?: StrapiRealStates;
  variables?: LoadRealStatesVariables;
  setting?: StrapiSettingResponse;
};

export default function Index({
  realStates,
  variables,
  setting,
}: RealStatesTemplateProps) {
  return (
    <CardsTemplate
      realStates={realStates}
      variables={variables}
      setting={setting}
    />
  );
}

export const getStaticProps: GetStaticProps<
  RealStatesTemplateProps
> = async () => {
  let data: RealStatesTemplateProps | null = null;

  try {
    data = await loadRealStates();
  } catch (error) {
    data = null;
    console.log(error);
  }

  return {
    props: {
      realStates: data.realStates,
      variables: {
        ...defaultLoadRealStateVariables,
      },
      setting: data.setting,
    },
    revalidate: 24 * 60,
  };
};
