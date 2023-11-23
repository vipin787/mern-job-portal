import React from "react";

const InputForm = ({ htmlFor, labelText, type,value, handleChange  }) => {
  return (
    <div className="mb-3">
      <label htmlFor={htmlFor} className="form-label">
        {labelText}
      </label>
      <input type={type} value={value} onChange={handleChange} className="form-control" />
    </div>
  );
};

export default InputForm;
