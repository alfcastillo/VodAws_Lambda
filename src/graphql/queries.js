/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVodAsset = /* GraphQL */ `
  query GetVodAsset($id: ID!) {
    getVodAsset(id: $id) {
      id
      title
      description
      video {
        id
        token
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVodAssets = /* GraphQL */ `
  query ListVodAssets(
    $filter: ModelvodAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVodAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        video {
          id
          token
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideoObject = /* GraphQL */ `
  query GetVideoObject($id: ID!) {
    getVideoObject(id: $id) {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const listVideoObjects = /* GraphQL */ `
  query ListVideoObjects(
    $filter: ModelvideoObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        token
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
