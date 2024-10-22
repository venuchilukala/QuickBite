import React from "react";
import { useQuery } from "@tanstack/react-query";
import {FaTrashAlt} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'

const Users = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await fetch(`http://localhost:6001/users`);
      return result.json();
    },
  });
  console.log(users);
  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h5>All Users</h5>
        <h5>Total users: {users.length}</h5>
      </div>
      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                      user.role === "admin" ? "Admin" : (<button className="btn btn-xs btn-circle bg-indigo-500 text-white"><FaUsers/></button>)
                    }
                  </td>
                  <td><button className="btn btn-xs bg-red text-white"><FaTrashAlt/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
