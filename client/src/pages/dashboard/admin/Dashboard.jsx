import React from "react";
import { FaRupeeSign, FaUsers } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiStabbedNote } from "react-icons/gi";
import { TfiStatsUp } from "react-icons/tfi";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <div className="stats shadow flex flex-col md:flex-row ">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <TfiStatsUp className="w-8 h-8" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value flex">
            <FaRupeeSign /> <span>{stats.revenue}</span>
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="w-8 h-8" />
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiSolidFoodMenu className="w-8 h-8" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <GiStabbedNote className="w-8 h-8" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
