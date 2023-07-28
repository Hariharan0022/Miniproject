import "./Attendance.css";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Sidebar from "../components/Sidebar";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
  datasets: [
    {
      data: [8, 7.8, 6, 8, 7, 5, 6],
      backgroundColor: "transparent",
      borderColor: "#302f49",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5,
    },
  ],
};
const options = {
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 2,
      max: 10,
      ticks: {
        stepSize: 2,
        callback: (value) => value + "k",
      },
      grid: {
        borderDash: [10],
      },
    },
  },
};

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  const fetchAttendanceData = () => {
    const mockData = [
      {
        id: 1,
        employeeName: "John Doe",
        date: "2023-07-08",
        status: "Present",
        leave_balance: "5",
        Percentage: "70%",
      },
      {
        id: 2,
        employeeName: "Jane Smith",
        date: "2023-07-08",
        status: "Absent",
        leave_balance: "6",
        Percentage: "72%",
      },
      {
        id: 3,
        employeeName: "Michael Johnson",
        date: "2023-07-08",
        status: "Present",
        leave_balance: "3",
        Percentage: "60%",
      },
    ];

    setAttendanceData(mockData);
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  return (
    <>
      <Sidebar/>
      <div className="graph-page">
        <div className="cov">
          <div className="attendance-page">
            <h2>Attendance</h2>
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Leave_Balance</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((attendance) => (
                  <tr key={attendance.id}>
                    <td>{attendance.id}</td>
                    <td>{attendance.employeeName}</td>
                    <td>{attendance.date}</td>
                    <td>{attendance.status}</td>
                    <td>{attendance.leave_balance}</td>
                    <td>{attendance.Percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cover-graph">
          <div style={{ width: "500px", height: "300px", marginLeft: "20px" }}>
            GRAPH
            <Line data={data} options={options}></Line>
          </div>
        </div>
        <div className="cover-2">
          <div className="left-pic">
          <img
            src="https://c0.wallpaperflare.com/preview/241/384/859/analysis-analytics-analyzing-annual.jpg"
            alt="Lamp"
            width="400"
            height="400">
          </img>
          </div>
          <div className="right-pic">
          <p>
            <table>
              <tbody>
                
                  <tr>
                    <td> *Define working hours and core hours for employees.</td>
                  </tr><br></br>
                  <tr>
                    <td>*Implement time logging or tracking systems.</td>
                  </tr><br></br>
                  <tr>
                    <td>*Emphasize punctuality and discourage lateness.</td>
                  </tr><br></br>
                  <tr>
                    <td>*Establish guidelines for reporting absences.</td>
                  </tr><br></br>
                  
                
              </tbody>
            </table>
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;