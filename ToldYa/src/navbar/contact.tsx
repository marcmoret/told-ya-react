import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact">
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:marco.moretto@me.com";
          e.preventDefault();
        }}
      >
        marco.moretto@me.com
      </Link>
    </div>
  );
}
