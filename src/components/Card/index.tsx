import React from "react";
import "./Card.css";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

export function CardHeader({ title }: { title: string }) {
  return <div className="card-header">{title}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="card-content">{children}</div>;
}

export function CardThumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="card-thumbnail">
      <img src={src} alt={alt} />
    </div>
  );
}

export function CardAvatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="card-avatar">
      <img src={src} alt={alt} />
    </div>
  );
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="card-footer">{children}</div>;
}
