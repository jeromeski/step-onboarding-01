import React from "react";

export default function Button({ children, type, id, goToNext }) {
  return (
    <button type={type} id={id} onClick={goToNext}>
      {children}
    </button>
  );
}
