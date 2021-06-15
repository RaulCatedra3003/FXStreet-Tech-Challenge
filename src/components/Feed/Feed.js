import React, { useEffect, useState } from 'react';

import './Feed.scss';

import FeedNavBar from '../FeedNavBar';
import LatestFeedWraper from '../LatestFeedWraper';
import PopularFeedWraper from '../PopularFeedWraper';
import Spinner from '../Spinner';

export const Feed = () => {
  const [filter, setFilter] = useState('latest');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7')
      .then((res) => res.json())
      .then((result) => {
        result.sort((a, b) => {
          return (
            new Date(b.publicationTime).getTime() -
            new Date(a.publicationTime).getTime()
          );
        });
        setPosts(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="feed">
      <FeedNavBar filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <Spinner />
      ) : filter === 'latest' ? (
        <LatestFeedWraper posts={posts} />
      ) : filter === 'popular' ? (
        <PopularFeedWraper posts={posts} />
      ) : null}
    </div>
  );
};
