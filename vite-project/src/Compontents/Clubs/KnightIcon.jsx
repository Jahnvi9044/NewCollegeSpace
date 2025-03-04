import React from "react";

const KnightIcon = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 50h44v4H10zm34-42a6 6 0 00-6 6v6h4v-6a2 2 0 014 0v10h4V14a6 6 0 00-6-6zM24 38v-6h-2v6a8 8 0 01-8 8v2h18v-2a8 8 0 01-8-8zM10 48h44v4H10z" />
    </svg>
  );
};

export default KnightIcon;
