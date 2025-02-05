import React from "react";

const GanderCheckbox = ({onCheckboxChange ,selectGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selacted" : ""}`}>
          <span className="ml-2 label-text">Male</span>
          <input
            type="checkbox"
            name="gender"
            value="male"
            className="checkbox border-slate-900"
            checked={selectGender === "male"}
            onChange={()=> onCheckboxChange ("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender === "female" ? "selacted" : ""}`}>
          <span className="ml-2 label-text">Female</span>
          <input
            type="checkbox"
            name="gender"
            value="female"
            className="checkbox border-slate-900"
            checked={selectGender === "female"}
            onChange={()=> onCheckboxChange ("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GanderCheckbox;
