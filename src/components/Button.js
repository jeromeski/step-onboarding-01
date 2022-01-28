import React from "react";

export default function Button({
  children,
  type,
  id,
  goToNext,
  goToPrev,
  onFinish
}) {
  if (!children) return <></>;
  if (id === "next-btn")
    return (
      <button type={type} id={id} onClick={() => goToNext(data)}>
        {children}
      </button>
    );
  if (id === "back-btn")
    return (
      <button type={type} id={id} onClick={() => goToPrev()}>
        {children}
      </button>
    );
  return <button type={type}>{children}</button>;
}
