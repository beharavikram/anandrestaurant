import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

function AdminDashboard() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: '#e74c3c',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Sales Overview</h3>
        <Line data={data} />
      </div>
      {/* Add more dashboard widgets and functionalities here */}
    </div>
  );
}

export default AdminDashboard;