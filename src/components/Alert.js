import React from "react";

const Alert = ({ variant, text }) => {
  const color = variant ? variant : "bg-blue-500";

  return (
    <div
      class={`p-3 mb-2 shadow-md text-sm text-white ${color} rounded-full `}
      role="alert"
    >
      <p class="font-medium">{text}</p>
    </div>
  );
};

export default Alert;
