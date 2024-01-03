import { loadRealStates } from 'api/load-real-states';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CardTemplate } from 'templates/CardTemplate';
import { CardsTemplateProps } from 'templates/CardsTemplate';

export default function PostPage({ realStates, setting }: CardsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>{realStates.data[0].attributes.streetName}</title>
        <meta
          name="description"
          content={realStates.data[0].attributes.description}
        />
      </Head>

      <CardTemplate
        setting={setting}
        realEstate={realStates.data[0]}
      ></CardTemplate>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CardsTemplateProps> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadRealStates({ slug: ctx.params.slug as string });
  } catch (e) {
    data = null;
  }

  if (!data || !data.realStates || !data.realStates.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      realStates: data.realStates,
      setting: data.setting,
    },
    revalidate: 24 * 60 * 60,
  };
};
