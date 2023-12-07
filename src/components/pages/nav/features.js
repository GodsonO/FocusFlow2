import React from "react";
import TaskTracking from "../../../img/tasktracking.png";
import Collab from "../../../img/collab.png";
import Deadlines from "../../../img/deadline.png";

const Work = () => {
  const workInfoData = [
    {
      image: TaskTracking,
      title: "Task Tracking",
      text: "They allow users to track the progress of tasks, see what's been completed and what's outstanding. This can help in understanding workloads and meeting deadlines.",
    },
    {
      image: Collab,
      title: "Collaboration",
      text: "Many task management tools support collaboration by allowing users to assign tasks to team members, leave comments, share files, and collaborate on projects.  ",
    },
    {
      image: Deadlines,
      title: "Deadline Management",
      text: "They help users manage due dates, send reminders or notifications, and reduce the risk of missing important deadlines.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Organization, tracking, and completion of tasks and projects by individuals and teams with efficiency and effectiveness.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" height="120"/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;