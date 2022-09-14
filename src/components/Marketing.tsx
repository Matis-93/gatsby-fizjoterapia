import React from "react";

type MarketingProps = {
  children: React.ReactNode; // 👈️ added type for children
};

const Marketing = ({ children }: MarketingProps) => (
  <div className="container marketing">{children}</div>
);
export default Marketing;
