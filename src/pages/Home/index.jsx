import React from 'react';
import { useSelector } from 'react-redux';

import Slider from './Slider';
import Service from './Service';
import SectionProduct from './SectionProduct';
import SectionBanner from './SectionBanner';
import Content from './Content';
import SectionBlog from './SectionBlog';

import './style.scss';
import { Spin } from 'antd';

function Home() {
  const { loading } = useSelector((state) => state.productReducer);
  return (
    <div className="container">
      {loading ? (
        <div className="spin">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Slider />
          <Service />
          <SectionProduct />
          <SectionBanner />
          <Content />
          <SectionBlog />
        </>
      )}
    </div>
  );
}

export default Home;
