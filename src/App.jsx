/*
import React, { useState, useEffect, createContext } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'User', profilePicture: 'user.jpg' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Sidebar />
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
*/

import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import './App.css';

// Adjusted import paths for the new location of the components
import HomePage from './sidebar/HomePage';
import ExplorePage from './sidebar/ExplorePage';
import NotificationsPage from './sidebar/NotificationsPage';
import MessagesPage from './sidebar/MessagesPage';

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'User', profilePicture: 'user.jpg' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <Router>
        <div className={`app ${theme}`}>
          <Header />
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
            </Routes>
            <Profile />
            <TweetInput addTweet={addTweet} />
            <TweetList tweets={tweets} />
          </main>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
