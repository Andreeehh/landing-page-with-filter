import { loadRealStates } from 'api/load-real-states';
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

export async function getServerSideProps({ params }) {
  let data = null;

  try {
    data = await loadRealStates({ slug: params.slug });
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
  };
}
