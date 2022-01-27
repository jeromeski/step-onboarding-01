import React, { forwardRef } from "react";

export default forwardRef(function TextInput(
  { id, type = "text", placeholder, label = "" },
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} ref={ref} placeholder={placeholder} />
    </div>
  );
});
