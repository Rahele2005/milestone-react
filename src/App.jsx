import React, { useState } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';

const App = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <div>
      <h1>Twitter Clone</h1>
      <TweetInput addTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default App;
