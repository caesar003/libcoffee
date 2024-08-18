import React from "react";

export default function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="p-4">
      <div className="m-auto flex flex-col items-center gap-4 m-w-1200">
        {children}
      </div>
    </section>
  );
}
