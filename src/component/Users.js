import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const Users = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <ul className="collection with-header">
        <li className="collection-header">
          <h5 style={{ marginLeft: "20px" }}>Users</h5>
        </li>
        {data.users.map(user => (
          <li key={user.id}>
            <Link
              to={{
                pathname: "/reports",
                state: {
                  authReports: user.authorizedReport
                }
              }}
              className="collection-item"
            >
              {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
