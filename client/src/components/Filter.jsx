import React, { useEffect, useState } from 'react';
import '../assets/styles/Filter.css';
import contenticon from '../assets/images/person.jpg';
import community from '../assets/images/comm.jpg';

const Filter = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/all/.json?limit=4')
      .then(response => response.json())
      .then(data => {
        const subredditData = data.data.children.map(post => ({
          name: post.data.subreddit,
          subscribers: post.data.subscribers,
          icon: post.data.thumbnail_url || community, 
        }));
        setCommunities(subredditData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='Filter-container'>
      <div className="filter-dropdown-container">
        <select name="Filter" id="filter">
          <option value="" disabled selected>Filter By</option>
          <option value="Favourites">Favourites</option>
          <option value="Feed">Reddit Feed</option>
          <option value="Technology">Technology</option>
        </select>
      </div>
      <div className="filter-category">
        <div className="heading">
          <p>FAVOURITES</p>
          <p style={{color:'gray', fontSize:'small'}}>ALL</p>
        </div>
        <div className="content-box">
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
        </div>
      </div>
      <hr style={{width:'80%', margin:'auto', height:'1px', backgroundColor:'white'}}/>
      <div className="filter-category">
        <div className="heading">
          <p>REDDIT FEED</p>
          <p style={{color:'gray', fontSize:'small'}}>ALL</p>
        </div>
        <div className="content-box">
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
          <div className="content">
            <div className="detail">
              <img src={contenticon} alt="icon" className="content-icon" />
              <p className="community-name">r/funnymore</p>
            </div>
            <p className="subscribers">123</p>
          </div>
        </div>
      </div>
      <hr style={{width:'80%', margin:'auto', height:'1px', backgroundColor:'white'}}/>
      <div className="filter-category">
      <div className="heading">
        <p>COMMUNITY</p>
        <p style={{color:'gray', fontSize:'small'}}>ALL</p>
      </div>
      <div className="content-box">
        {communities.map((community, index) => (
          <div className="content" key={index}>
            <div className="detail">
              <img src={community.icon} alt="icon" className="content-icon" />
              <p className="community-name">{`r/${community.name}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Filter;