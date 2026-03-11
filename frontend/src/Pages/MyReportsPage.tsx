export default function MyReportsPage() {
  const arr = [
    { category: "Finance", urgency: "High", message: "Budget report due tomorrow" },
    { category: "HR", urgency: "Medium", message: "Update employee records" },
    { category: "IT", urgency: "Low", message: "System maintenance scheduled" },
    { category: "Marketing", urgency: "High", message: "Campaign launch delayed" },
  ];
  return (
    <div>
      <h2>MyReportsPage</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Urgency</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.urgency}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}