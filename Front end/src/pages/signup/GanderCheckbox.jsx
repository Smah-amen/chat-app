import React from "react";

const GanderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="ml-2 label-text">Male</span>
          <input
            type="checkbox"
            name="gender"
            value="male"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="ml-2 label-text">Female</span>
          <input
            type="checkbox"
            name="gender"
            value="female"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GanderCheckbox;
