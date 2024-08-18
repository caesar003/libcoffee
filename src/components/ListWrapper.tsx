import React from "react";
export default function ListWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex wrap gap-4 justify-center">{children}</div>;
}
