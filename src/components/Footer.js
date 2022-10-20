import React from "react";

export default function Footer() {
  const defaultYear = () => {
    const today = new Date();
    return today.getFullYear();
  };

  return (
    <div>
      <div className="line" />
      <div className="footer">© {defaultYear()} Yuri Cunha</div>
    </div>
  );
}
