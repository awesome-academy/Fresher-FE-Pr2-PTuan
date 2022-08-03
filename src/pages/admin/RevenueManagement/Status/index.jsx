import React from "react";

import "./style.scss";

const Status = ({ icon, title, count }) => {
  return (
    <div className="status-card">
      <div className="status-card__icon">
        <i className={icon}></i>
      </div>
      <div className="status-card__info">
        <h4>{count}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Status;
