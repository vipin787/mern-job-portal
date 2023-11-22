import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link className="btn btn-success" to="/">
        Go Back
      </Link>
    </>
  );
};

export default NotFound;
