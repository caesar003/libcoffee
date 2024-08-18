import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-screen bg-gray-100">
      <div
        className="w-full p-4 flex gap-5"
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <p>
          Copyright &copy; <Link to="/">Libcoffee</Link>
        </p>{" "}
        2024. All rights reserved
      </div>
    </footer>
  );
}
