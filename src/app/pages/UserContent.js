import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

import MainContent from '../components/MainContent';
import MovieCard from '../components/MovieCard';

export function UserContent({ token }) {
  const [data, setData] = useState([]);
  const history = useHistory();

  const dataAPI = useCallback(async () => {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      }
    );
    if (response.ok) {
      setData(await response.json());
    }

    if (response.status === 401) {
      history.replace('/login');
    }
  }, [setData]);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  return (
    <React.Fragment>
      <MainContent>
        {data.map((item) => {
          return (
            <MovieCard
              id={item.id}
              title={item.title}
              description={item.description}
              source={item.image}
            />
          );
        })}
      </MainContent>
    </React.Fragment>
  );
}

function mapStateToProps({ authentication }) {
  return {
    token: authentication.token,
  };
}

export default connect(mapStateToProps)(UserContent);
