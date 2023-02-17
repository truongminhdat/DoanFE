import React from "react";
import HomeDashboard from "../HomeDashboard";
import Chart from "../Chart";
import PopularProducts from "../PopularProduct";
import RecentOrders from "../RecentOrders";
import TransactionChart from "../TransactionChart";
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <HomeDashboard />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <Chart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
}
