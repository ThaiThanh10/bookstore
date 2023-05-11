import React from "react";
const Input = (props) => {
  const { label,errorMessage,handleChange, ...inputData } = props;
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <label className="input-group">
        <span>{label}</span>
        <input  {...inputData} onChange={handleChange} className="input input-bordered w-[300px] :invalid " />
        <p className=" text-[#FF0000] text-lg hidden error">{errorMessage}</p>
      </label>
    </div>
  );
};

export default Input;
