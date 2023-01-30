import React from "react";

const ScoreStack = (stk) => {
  return (
    <div className="alert alert-info d-flex justify-content-left flex-wrap">
      {stk.map((s) => (
        <div className={`badge badge-${s} margin-1p`}>{s}</div>
      ))}
    </div>
  );
};

export default ScoreStack;
