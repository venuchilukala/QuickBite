import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:6001/payments?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  //   console.log(orders);

  const formatDate = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    return [createdAtDate.toLocaleDateString(),"  " , createdAtDate.toLocaleTimeString()];
  };

  return (
    <div className="section-container">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="md:py-28 flex flex-col justify-between items-center gap-8">
          {/* text */}
          <div className="space-y-8 px-2">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Track All Your <span className="text-green">Orders</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Orders table */}
      {orders.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-green text-white font-md">
                  <th>#</th>
                  <th>Order Date</th>
                  <th>Transaction Id</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row items */}
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{formatDate(order.createdAt)}</td>
                    <td>{order.transactionId}</td>
                    <td>&#8377; {order.price}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link
                        to="/contact"
                        className="btn btn-ghost text-rose-600 btn-xs"
                      >
                        Contact
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center mt-20">
          <p>Cart is empty. Please add products.</p>
          <Link to="/menu">
            <button className="btn bg-green text-white mt-3">
              Back to Menu
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
