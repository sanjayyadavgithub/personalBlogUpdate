import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

const SideImage = props => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="image"/>
    </div>
  );
}

const Home = props => {

  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + 'px',
    overflow : 'hidden'
  }

  const sideImageHeight = gallaryHeight / 3;

  return (
    <div>
      <Card>
        <div className="gallaryPost" style={gallaryStyle}>
          <section style={{ width: '70%' }}>
            <div>
              <img src={require('../../asserts/sec2.jpg')} alt="section image" />
            </div>
          </section>
          <section className={"sideImageWrapper"} style={{ width: '30%' }}>
            <SideImage
              height={sideImageHeight}
              src = {'https://topsolutioneducation.000webhostapp.com/images.jpeg'}
            />   
            <SideImage
              height={sideImageHeight}
              src = {'https://topsolutioneducation.000webhostapp.com/images.jpeg'}
            /> 
            <SideImage
              height={sideImageHeight}
              src = {'https://topsolutioneducation.000webhostapp.com/images.jpeg'}
            /> 

          </section>
        </div>
      </Card>
      <section className="HomeContainer">
        <RecentPosts style={{ width: '70%'}} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Home;