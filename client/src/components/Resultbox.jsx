import React, { useEffect, useState } from 'react';
import '../assets/styles/Resultbox.css';
import Icons from '../assets/icons';
import axios from 'axios';

const Resultbox = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('top'); // Default topic is 'hot'
  
  useEffect(() => {
    // Fetch data from Reddit API based on the selected topic
    axios.get(`https://www.reddit.com/r/popular/${selectedTopic}.json?limit=5`)
      .then(response => {
        const postData = response.data.data.children.map(post => ({
          title: post.data.title,
          url: post.data.url,
          author: post.data.author,
          avatar: post.data.thumbnail || 'default-avatar.png', 
          date: new Date(post.data.created_utc * 1000).toLocaleString(),
          comments: post.data.num_comments,
          shares: post.data.num_crossposts, 
          score: post.data.score, 
        }));
        setPosts(postData);
      })
      .catch(error => {
        console.error('Error fetching Reddit posts:', error);
      });
  }, [selectedTopic]); 

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };


  return (
    <div className='result'>
      <div className="topic-container">
        <div className="topic-name">
          Popular
        </div>
        <div className="toppic-list">
        <p onClick={() => handleTopicClick('hot')}>Hot</p>
        <p onClick={() => handleTopicClick('new')}>New</p>
        <p onClick={() => handleTopicClick('controversial')}>Controversial</p>
        <p onClick={() => handleTopicClick('rising')}>Rising</p>
        <p onClick={() => handleTopicClick('top')}>Top</p>
        </div>
      </div>
      <div className="cards-container">
        <div className="popular-posts">
          {posts.map((post, index) => (
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
                  {post.title}
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
    </div>
  )
}

export default Resultbox;