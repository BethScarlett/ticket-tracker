import React from "react";
import { Link } from "react-router-dom";

const ErrorNotFoundPage = () => {
  return (
    <div>
      Error 404: Not Found
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorNotFoundPage;
