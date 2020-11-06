import React from 'react';
import './Home.css';
import profilepic from '../../images/profilepic.jpg'

const Home = () => {
    return (
        <div className= "pagebody">
        <div className= "container">
            <h2>Hi, I'm Kesha!</h2>
            <div className= "row">
            <div className= "col-md-4">
            <img src={profilepic} className={"profilepic"} alt="keshapic" />
            </div>
            <div className= "col-md-8">
            <p> My name is Kesha Hall. I am a wife and mother of two young boys. I
            am originally from middle georgia, went to college in Savannah where
            I met my husband and moved to Texas for six years. My career
            experience is in the logistics and human resource field, which were
            unfulfilling as it did not meet my need for solving problems.
            Although the pandemic is a result to my unemployment, the silver
            lining is I now have the opportunity to learn skills for an exciting
            career in web development. I always wanted to understand programming
            languages and use my creativity. </p>

            <p> During my rare down time, I enjoy walking trails, diy projects,
            playing in makeup, and spending time with my family. </p>
            </div>
            </div>
        </div>
        </div>
        
        
    );
};

export default Home;