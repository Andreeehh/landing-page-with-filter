import { GQL_QUERY_GET_REAL_STATES } from 'graphql/queries/real-states';
import { request } from 'graphql-request';
import config from 'config';
import { RealStatesTemplateProps } from 'pages';

export type LoadRealStatesVariables = {
  start?: number;
  limit?: number;
  sort?: string[];
  name?: string;
  slug?: string;
  streetName?: string;
  neighborhood?: string;
  city?: string;
  addressType?: string;
  bedrooms?: number;
  parkingSpaces?: number;
};

export const defaultLoadRealStateVariables: LoadRealStatesVariables = {
  start: 0,
  limit: 9,
};

export const loadRealStates = async (
  variables: LoadRealStatesVariables = {},
): Promise<RealStatesTemplateProps> => {
  const data = (await request(config.graphqlUrl, GQL_QUERY_GET_REAL_STATES, {
    ...defaultLoadRealStateVariables,
    ...variables,
  })) as RealStatesTemplateProps;

  return data;
};
