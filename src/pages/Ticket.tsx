import "./Ticket.scss";
import Tracker from "../components/Tracker/Tracker";
import team from "../data/team";
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <div className="container">
      <h1 className="container__heading">Ticket Tracker</h1>
      <div>
        <Tracker team={team} />
      </div>
      <div>
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  );
};

export default Ticket;
