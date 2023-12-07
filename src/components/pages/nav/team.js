import React from "react";


const Work = () => {
  const workInfoData = [
    {
     
      title: "Oluwatomilola Fagbore",
      text: "Project Manager: Responsible for project planning, execution, and delivery.",
    },
    {
      
      title: "Omoghene Godson Omoghene",
      text: "Web Development: Handles the design and development of user-friendly features. Content Creation: Creates well-curated content.",
    },
    {
    
      title: "Iyogun Clarkson",
      text: "Machine Learning: Focuses on the recommendation algorithm.  CORS (Cross-Origin Resource Sharing).",
    },
  ];
  return (
    <div className="work-section-wrapper" id="team">
      <div className="work-section-top">
        <p className="primary-subheading">Team</p>
        <h1 className="primary-heading">Meet The Team</h1>
        {/* <p className="primary-text">
        Organization, tracking, and completion of tasks and projects by individuals and teams with efficiency and effectiveness.
        </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
           
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;