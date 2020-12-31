import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({ uri: 'http://localhost:3000/graphql' });

// query arts($offset: Int!, $limit: Int!, $title: String){
//     arts(offset: $offset, limit: $limit, title: $title){
//       _id
//       title
//       height
//       width
//       medium
//       category
//       sub_category
//       owner_collection
//       published_year
//       date
//       publisher
//       remarks
//       deven_img
//       kabindra_sn
//       kabindra_dsc
//     } 
//   } 
export const GET_ARTS = gql`
    {
        arts {
            _id
            title
            height
            width
            medium
            category
            sub_category
            owner_collection
            published_year
            date
            publisher
            remarks
            deven_img
            kabindra_sn
            kabindra_dsc
        } 
    }
`;

export const GET_ART = gql`
    query GetArt($artId: String) {
        art(id: $artId) {
            _id
            title
            height
            width
            medium
            category
            sub_category
            owner_collection
            published_year
            date
            publisher
            remarks
            deven_img
            kabindra_sn
            kabindra_dsc
        }
    }
`;

export const ADD_ART = gql`
    mutation AddArt(
        $id: String!,
        $title: String!,
        $height: Float!,
        $width: Float!,
        $medium: String!,
        $category: String!,
        $sub_category: String!,
        $owner_collection: String!,
        $published_year: Int!,
        $date: Date!,
        $publisher: String!,
        $remarks: String!,
        $deven_img: Int!,
        $kabindra_sn: Int!,
        $kabindra_dsc: Int!) {
        addArt(
            title: $title,
            height: $height,
            width: $width,
            medium: $medium,
            category: $category,
            sub_category: $sub_category,
            owner_collection: $owner_collection,
            published_year: $published_year,
            date: $date,
            publisher: $publisher,
            remarks: $remarks,
            deven_img: $deven_img,
            kabindra_sn: $kabindra_sn,
            kabindra_dsc: $kabindra_dsc) {
            _id
        }
    }
`;

export const UPDATE_ART = gql`
    mutation UpdateArt(
        $id: String!,
        $title: String!,
        $height: Float!,
        $width: Float!,
        $medium: String!,
        $category: String!,
        $sub_category: String!,
        $owner_collection: String!,
        $published_year: Int!,
        $date: Date!,
        $publisher: String!,
        $remarks: String!,
        $deven_img: Int!,
        $kabindra_sn: Int!,
        $kabindra_dsc: Int!) {
        updateArt(
            title: $title,
            height: $height,
            width: $width,
            medium: $medium,
            category: $category,
            sub_category: $sub_category,
            owner_collection: $owner_collection,
            published_year: $published_year,
            date: $date,
            publisher: $publisher,
            remarks: $remarks,
            deven_img: $deven_img,
            kabindra_sn: $kabindra_sn,
            kabindra_dsc: $kabindra_dsc) {
            date
        }
    }
`;