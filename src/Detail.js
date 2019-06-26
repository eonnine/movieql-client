import React from 'react';
import { loadPartialConfig } from '@babel/core';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';

const Detail = ({
  match: { params: { movieId } }
}) => (
 <Query query={MOVIE_DETAILS} variables={{ movieId }}>
  {({loading, error, data}) => {
    if(loading) return 'loading';
    if(error) return 'error';
    return (
      <React.Fragment>
      {data.movie.id}
      {data.movie.title}
      {data.movie.rating}     
      {data.movie.medium_cover_image}    
      </React.Fragment>
    );
  }
}</Query>
);

export default Detail;