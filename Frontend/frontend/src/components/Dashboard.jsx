import React from "react";
import Chart from "./Chart";
import MultiAxesChart from "./MultiAxesChart";

function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row pb-20">
      <Chart />
      <MultiAxesChart />
    </div>
  );
}

export default Dashboard;
