import React from 'react';
import budgettracker from "../images/budgettracker.JPG";
import employeesummary from "../images/employeesummary.JPG";
import workouttracker from "../images/workouttracker.JPG";
import passwordgenerator from "../images/passwordgeneratorscreenshot.jpg";
import workdayscheduler from "../images/workdayscheduler.jpg";
import employeedirectory from "../images/employeedirectory.JPG";
//import resume from "../images/keshahallwebdevelopmentresume.pdf";
import "./Portfoliocard.css";



const images = {
    employeesummary, budgettracker, workouttracker, employeedirectory, passwordgenerator, workdayscheduler
}
//{props.projects.img}
function Portfoliocard(props) {
    //console.log(props);
    return (
     <>
        
        <div className="card" style={{width: "18rem", background: "grey"}}>
          <div className="row">
            <div className="col-sm-12">
            <img src={employeesummary} className="card-img-top" alt={props.projects.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.projects.title}</h5>
            <a href={props.projects.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.projects.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>
      {/* </div> */}
    {/* //</>

<> */}
{/* //<div className="card" style={{width: "18rem", background: "grey"}}> */}
          
            <img src={budgettracker} className="card-img-top" alt={props.projects.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.projects.title}</h5>
            <a href={props.projects.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.projects.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>

            
            <img src={workouttracker} className="card-img-top" alt={props.projects.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.projects.title}</h5>
            <a href={props.projects.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.projects.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>

            
            <img src={employeedirectory} className="card-img-top" alt={props.projects.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.projects.title}</h5>
            <a href={props.projects.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.projects.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>

            
            <img src={passwordgenerator} className="card-img-top" alt={props.projects.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.projects.title}</h5>
            <a href={props.projects.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.projects.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>

            
            <img src={workdayscheduler} className="card-img-top" alt={props.projects.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.projects.title}</h5>
            <a href={props.projects.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.projects.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>
            </div>
            </div>
           
            
        </div>
        </>
    )
}

export default Portfoliocard;