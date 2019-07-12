import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const Report = props => {
  const {
    location: {
      state: { authReports }
    }
  } = props;
  const reportsAvailable = data.reports.filter(report =>
    authReports.includes(report.id)
  );
  console.log(authReports, reportsAvailable);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <ul className="collection with-header">
        <li className="collection-header">
          <h5 style={{ marginLeft: "20px" }}>Reports</h5>
        </li>
        {reportsAvailable.map(reports => (
          <li key={reports.id}>
            <Link
              to={{
                pathname: "/filterBy",
                state: {
                  filters: reports.filterBy
                }
              }}
              className="collection-item"
            >
              {reports.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
