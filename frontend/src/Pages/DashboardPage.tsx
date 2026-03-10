import { Link } from "react-router";

export default function DashboardPage() {
  return (
    <nav>
      <div>DashboardPage</div>
      <Link to="/newReportPage">New Report</Link>
      <Link to="/myReportsPage">My Report</Link>
    </nav>
  )
}