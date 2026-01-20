import { Link } from "react-router-dom";

export default function PlaceholderPage({ title, note, backTo = "/" }) {
  return (
    <section style={{ padding: "40px 16px", maxWidth: 960, margin: "0 auto" }}>
      <h1>{title}</h1>
      <p style={{ marginTop: 8 }}>
        {note || "This page is in progress while we finalise the menu and ordering experience."}
      </p>
      <div style={{ marginTop: 16 }}>
        <Link to={backTo}>Back to Home Page</Link>
      </div>
    </section>
  );
}
