import React,{useState,useEffect}from 'react'
import './style.css'; 
import Card from '../UI/Card';
import blogPost from '../../data/blog.json'
import {NavLink} from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);

   useEffect(() => {
     const posts = blogPost.data;
     setPosts(posts);
   },[posts]);



  return (
    <div className="sidebarContainer">
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}> 
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
            <img src={require('../../blogPostImages/sanjay.jpg')} alt="sanjay"/>
        </div>
        <div className="cardBody">
          <p className="personalBio">My name is Sanjay Yadav,I am from basti, I am studing from Rec Sonbhadra with CSE </p>
        </div>
      </Card> 
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Social Newtork</span>
           </div>
      </Card>
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
           <span>Recent Posts </span>
        </div>
        <div className="recentPosts">
          {
            posts.map(posts => {
              return (
                <NavLink key={posts.id} to={`/post/${posts.id}`}>
                  <div className="recentPost">
                  <h3>{posts.blogTitle}</h3>
                  <span>{posts.postedOn}</span>
                  </div>
                 </NavLink>
                  
              );
            })
          }
        </div>
      </Card>
    </div>
   )
 }

export default Sidebar;