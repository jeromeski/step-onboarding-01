import React, { forwardRef, useState } from "react";

export default forwardRef(function PasswordInput(
  { id, buttonId, type = "password", placeholder, label = "" },
  ref
) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        type={`${show ? "text" : type}`}
        placeholder={placeholder}
      />
      <button
        id={buttonId}
        type="button"
        onMouseDown={handleShow}
        onMouseUp={handleShow}
      >
        show
      </button>
    </div>
  );
});
