import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Books = ({ data: { books = [] } }) => books.map(book => <h1 key={book.title}>{book.title}</h1>);

const allBooksQuery = gql`
  query {
    books {
      title
      author
    }
  }
`;

export default graphql(allBooksQuery)(Books);