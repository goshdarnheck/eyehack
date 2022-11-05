import React from "react";

const Project = ({ title, url, children }) => {
  return (
    <div className="project">
      <h2>
        <a href={url}>{title}</a>
      </h2>
      {children}
    </div>
  );
};

export default Project;
