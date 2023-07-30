import { GQL_FRAGMENT_REAL_STATES } from '../fragments/real-states';
import { gql } from 'graphql-request';

export const GQL_QUERY_GET_REAL_STATES = gql`
  ${GQL_FRAGMENT_REAL_STATES}

  query GET_REAL_STATES (
  $start: Int = 0
  $limit: Int = 9
  $sort: [String] = ["createdAt:desc"]
  $name: String
  $slug: String
  $streetName: String
  $neighborhood: String
  $city: String
  $bedrooms: Int
  $parkingSpaces: Int
  $addressType: String
){
  realStates(
      pagination: {
        start: $start
        limit: $limit
      }
      filters: {
        slug: { eq: $slug }
        or: [
          {name: {containsi: $name}}
          {streetName: {containsi: $streetName}}
          {neighborhood: {containsi: $neighborhood}}
          {city: {containsi: $city}}
          {bedrooms: {containsi: $bedrooms}}
          {parkingSpaces: {containsi: $parkingSpaces}}
          {addressType: {containsi: $addressType}}
        ]
      }
      sort: $sort
  ){
    ...realStateEntityResponseCollection
  }
}
`;
