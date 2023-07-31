import { GQL_FRAGMENT_REAL_STATES } from '../fragments/real-states';
import { gql } from 'graphql-request';

export const GQL_QUERY_GET_REAL_STATES = gql`
  ${GQL_FRAGMENT_REAL_STATES}

  query GET_REAL_STATES(
  $start: Int = 0
  $limit: Int = 9
  $sort: [String] = ["createdAt:desc"]
  $name: String
  $slug: String
  $streetName: String
  $neighborhood: String
  $city: String
  $bedrooms: Int
  $bathrooms: Int
  $parkingSpaces: Int
  $addressType: String
) {
  setting {
    ...settingEntityResponse
  }
  realStates(
    pagination: { start: $start, limit: $limit }
    filters: {
      slug: { eq: $slug }
      or: [
        { name: { containsi: $name } }
        { streetName: { containsi: $streetName } }
        { neighborhood: { containsi: $neighborhood } }
        { city: { containsi: $city } }
        { bedrooms: { eq: $bedrooms } }
        { bathrooms: { eq: $bathrooms } }
        { parkingSpaces: { eq: $parkingSpaces } }
        { addressType: { containsi: $addressType } }
      ]
    }
    sort: $sort
  ) {
    ...realStateEntityResponseCollection
  }
}
`;
