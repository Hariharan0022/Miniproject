import "./Performance.css";
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
  labels: ["Web app ", "API ", "Database ", "Testing", "System "],
  datasets: [
    {
      data: [7,8,9,7,0],
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
        borderDash: [10],
      },
    },
    y: {
      min: 2,
      max: 10,
      
      grid: {
        borderDash: [10],
      },
    },
  },
};

const Performance = () => {
  const [PerformanceData, setPerformanceData] = useState([]);

  const fetchPerformanceData = () => {
    const mockData = [
      {
        id: 619,
        project_Name:"Web app design",
        
        status: "completed",
        Credit_score: "7",
        Duration_in_day: "15",
      },
      {
        id: 619,
        project_Name:"API Development",
        
        status: "Completed",
        Credit_score: "8",
        Duration_in_day: "20",
      },
      {
        id: 619,
        project_Name:"Database Management",
        
        status: "Completed",
        Credit_score: "9",
        Duration_in_day: "10",
      },
      {
        id: 619,
        project_Name:"Testing and Debugging",
        
        status: "Completed",
        Credit_score: "7",
        Duration_in_day: "10",
      },
      {
        id: 619,
        project_Name:"System Integration",
        
        status: "On-going",
        Credit_score: "-",
        Duration_in_day: "-",
      },
    ];

    setPerformanceData(mockData);
  };

  useEffect(() => {
    fetchPerformanceData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="graph-page1">
        <div className="cover3">
          <div className="attendance-page3">
            <center><h2>PERFORMANCE</h2></center>
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Project_Name</th>
                  <th>Status</th>
                  <th>Credit_score</th>
                  <th>Duration_in_day</th>
                </tr>
              </thead>
              <tbody>
                {PerformanceData.map((performance) => (
                  <tr key={performance.id}>
                    <td>{performance.id}</td>
                    <td>{performance.project_Name}</td>
                    <td>{performance.status}</td>
                    <td>{performance.Credit_score}</td>
                    <td>{performance.Duration_in_day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cover-graph3">
          <div style={{ width: "500px", height: "300px", marginLeft: "20px" }}>
            <center>PERFORMANCE GRAPH</center>
            <Line data={data} options={options}></Line>
          </div>
        </div>
        <div className="cover-21">
          <br>
          </br>

          <p>Jack, a full stack developer at [IT Company], is an exceptional professional with a remarkable skill set. With expertise in both frontend and backend development, Jack consistently delivers outstanding results on various projects.

One of Jack's greatest strengths is their ability to handle complex challenges. They possess strong problem-solving skills and a keen eye for detail, allowing them to quickly identify and resolve issues. Their analytical thinking and resourcefulness make them an invaluable asset to the team.

Jack's technical proficiency is commendable. They have a deep understanding of multiple programming languages, frameworks, and tools relevant to full stack development. Whether it's working on the frontend with HTML, CSS, and JavaScript or diving into backend technologies like Node.js or Python, Jack's versatility shines through.

Furthermore, Jack's commitment to quality and efficiency is evident in their work. They pay meticulous attention to code structure, performance optimization, and best practices, resulting in robust and scalable applications. Their dedication to producing high-quality deliverables greatly contributes to the success of projects.

Beyond their technical skills, Jack is a fantastic team player. They actively participate in collaborative discussions, share ideas, and effectively communicate with team members. Their ability to adapt to different project requirements and work harmoniously within the team fosters a positive and productive work environment.

Overall, Jack is an exceptional full stack developer.
</p>
<div className="per">
  80

</div>
<img src="https://cdn-icons-png.flaticon.com/128/9108/9108245.png" alt="Lamp" width="50" height="50"></img>
        </div>
      </div>
    </>
  );
};

export default Performance;