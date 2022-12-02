import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
  query getProduct($category: ID) {
    product(department: $department) {
      _id
      name
      image
      department {
        _id
      }
      category
      color
      price
      description
      quantity
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
    query products {
      products{
        name
        image
        color
        price
        description
        price
      }
    }
`;

export const QUERY_DEPARTMENTS = gql`
  {
    departments {
      _id
      name
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;