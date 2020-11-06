import React from 'react';
import Portfoliocard from '../../components/Portfoliocard';
import portfoliodetails from '../../components/portfoliodetails.json';



const Portfolio = () => {
    console.log(portfoliodetails);

    return (
        <div className= "container">
            <h1>This is my Portfolio page .</h1>
    
            {portfoliodetails.map(item => {
                return <Portfoliocard projects={item} />
            })}
            
        </div>
    );
};

export default Portfolio;