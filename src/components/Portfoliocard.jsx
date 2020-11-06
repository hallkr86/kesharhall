import React from 'react';
// import budgettracker from "../../images/budgettracker.JPG";
// import employeesummary from "../../images/employeesummary.JPG";
// import workouttracker from "../../images/workouttracker.JPG";
// import passwordgenerator from "../../images/passwordgeneratorscreenshot.JPG";
// import workdayscheduler from "../../images/workdayscheduler.jpg";
// import employeedirectory from "../../images/employeedirectory.JPG";


// const images = {
//     employeesummary, budgettracker, workouttracker, employeedirectory, passwordgenerator, workdayscheduler
// }src={JSON.parse(props.projects.img)}

function Portfoliocard(props) {
    //console.log(props);
    return (
     <>
        <div className="card" style={{width: "18rem", background: "grey"}}>
            <img src={[props.projects.img]} className="card-img-top" alt={props.projects.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.projects.title}</h5>
            <a href={props.projects.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.projects.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>
      </div>
     </>
    )
}

export default Portfoliocard;