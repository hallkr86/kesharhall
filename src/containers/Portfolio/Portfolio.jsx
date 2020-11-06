import React from 'react';
import Portfoliocard from '../../components/Portfoliocard';
import portfoliodetails from '../../components/portfoliodetails.json';




const Portfolio = () => {
    console.log(portfoliodetails);

    return (
        <div className= "pagebody">
        <div className= "container">
            <section>
            <h1>This is my Portfolio page</h1>
            </section>
            {portfoliodetails.map(item => {
                return <Portfoliocard projects={item} />
            })}
            
        </div>
        </div>
    );
};

export default Portfolio;