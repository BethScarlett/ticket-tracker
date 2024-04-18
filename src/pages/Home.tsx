import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Hi
      <Link to="/tickets">
        <button>Go to tickets</button>
      </Link>
    </div>
  );
};

export default Home;
