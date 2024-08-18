import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
  return (
    <footer className="w-screen bg-gray-100">
      <div className="w-full p-4 flex gap-5 m-auto m-w-1200">
        <p>
          Copyright &copy; <Link to="/">Libcoffee</Link>
        </p>{" "}
        2024. All rights reserved
      </div>
    </footer>
  );
}
