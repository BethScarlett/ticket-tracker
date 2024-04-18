import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      Hello
      <Link to="/">
        <button>Back to home page</button>
      </Link>
      <Link to="/tickets">
        <button>Back to tickets</button>
      </Link>
    </div>
  );
};

export default Profile;
