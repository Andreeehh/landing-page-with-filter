import {
  LoadRealStatesVariables,
  defaultLoadRealStateVariables,
  loadRealStates,
} from 'api/load-real-states';
import { GetStaticProps } from 'next';
import { StrapiRealStates } from 'shared-typed/strapi-real-satates';
import { CardsTemplate } from 'templates/CardsTemplate';

export type RealStatesTemplateProps = {
  realStates?: StrapiRealStates;
  variables?: LoadRealStatesVariables;
};

export default function Index({
  realStates,
  variables,
}: RealStatesTemplateProps) {
  console.log(realStates);
  console.log(variables);
  return <CardsTemplate realStates={realStates} variables={variables} />;
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
    },
    revalidate: 24 * 60,
  };
};
