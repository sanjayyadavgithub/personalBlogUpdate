import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: '20px' }}>
        <div className="postImageWrapper">
          <img src={require('../../../asserts/img5.jpeg')} alt="section image" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <span>Featured</span>
          <h2>Fiteness Mantrato Live fit Life</h2>
          <span>posted on march 2020 sanjay yadav</span>
          <p>Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop</p>
          <button>Read More</button>
        </div>
      </Card>
    </div>
  );

 }

export default RecentPosts