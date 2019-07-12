import React from "react";
// import { Link } from "react-router-dom";
// import data from "../data";

const FilterBy = props => {
  const {
    location: {
      state: { filters }
    }
  } = props;

  console.log(filters);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h5 style={{ marginLeft: "20px" }}>Filters</h5>
      <form>
        {filters.map(name => (
          <label htmlFor={name}>
            {name}
            <input type="text" name={name} id={name} />
          </label>
        ))}
        <button type="button">Cancel</button>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FilterBy;
