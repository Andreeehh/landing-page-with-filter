import { gql } from 'graphql-request';

export const GQL_FRAGMENT_REAL_STATES = gql`
  fragment realStateEntityResponseCollection on RealStateEntityResponseCollection{
  data{
    ...realStateEntity
  }
}

fragment realStateEntity on RealStateEntity{
  id
  attributes{
    ...realState
  }
}

fragment realState on RealState{
  name
  streetName
  streetNumber
  notes
  neighborhood
  city
  size
  bedrooms
  bathrooms
  parkingSpaces
  createdAt
  cover{
    ...uploadFileRelationResponseCollection
  }
}

fragment uploadFileRelationResponseCollection on UploadFileRelationResponseCollection {
	data {
    ...uploadFileEntity
  }
}

fragment uploadFileEntity on UploadFileEntity {
  id
  attributes {
    ...uploadFile
  }
}

fragment uploadFile on UploadFile {
  url
  alternativeText
}
`;
