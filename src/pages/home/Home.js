import React from 'react';
import BlogsGrid from '../../components/grid/BlogsGrid';
import SideBar from '../../components/sideBar/SideBar';

const Home = () => {
    return (
        <section className="wrapper">
            <SideBar />
            <BlogsGrid />
        </section>
    );
};

export default Home;