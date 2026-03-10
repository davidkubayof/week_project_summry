import { Link } from "react-router";

export default function DashboardPage() {
  return (
      // <div>DashboardPage</div>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  )
}
