import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/Resultbox.css';
import Icons from '../assets/icons';

const Searchbox = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      // Fetch data from Reddit API based on the search query
      axios
        .get(`https://www.reddit.com/search.json?q=${query}`)
        .then((response) => {
          const posts = response.data.data.children.map((post) => ({
            title: post.data.title,
            url: post.data.url,
            author: post.data.author,
            avatar: post.data.thumbnail || 'default-avatar.png', // Default avatar if none exists
            date: new Date(post.data.created_utc * 1000).toLocaleString(),
            comments: post.data.num_comments,
            shares: post.data.num_crossposts,
            score: post.data.score,
          }));
          setResults(posts);
        })
        .catch((error) => {
          console.error('Error fetching Reddit posts:', error);
        });
    }
  }, [query]); // Re-run this effect when the query changes

  return (
    <div className="result">
      <div className="topic-container">
        <div className="topic-name">
          Search Result
        </div>
      </div>
      {results.length ? (
        <div className="cards-container">
          <div className="popular-posts">
            {results.map((post, index) => (
              <div className="post-card" key={index}>
                <div className="post-card-left">
                  <img
                    src={post.avatar}
                    alt="Post"
                    className="post-image"
                  />
                </div>
                <div className="post-card-center">
                  <p className="post-title">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </p>
                  <div className="post-meta">
                    <span>Posted by </span>
                    <img
                      src={post.avatar}
                      alt="User Avatar"
                      className="user-avatar"
                    />
                    <span className="poster-name">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
                <div className="post-card-right">
                  <div className="post-stats">
                    <div className="stat">
                      <img src={Icons.Message} alt="Comments" />
                      {post.comments} Comments
                    </div>
                    <div className="stat">
                      <img src={Icons.Share} alt="Share" />
                      {post.shares} Share
                    </div>
                    <div className="stat">
                      <img src={Icons.More} alt="More" />
                      More
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="votes">
                    <img src={Icons.UpColor} className="vote-up" alt="Upvote" />
                    <span className="vote-count">{post.score}K</span>
                    <img src={Icons.DownColor} className="vote-down" alt="Downvote" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No results found. Try searching with different keywords.</p>
      )}
    </div>
  );
};

export default Searchbox;
