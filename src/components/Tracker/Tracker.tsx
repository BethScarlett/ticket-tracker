import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import "./Tracker.scss";

type Employee = {
  team: Team[];
};

const Tracker = ({ team }: Employee) => {
  const employeeArr = [...team];
  return (
    <div className="tracker">
      {employeeArr.map((employee: Team) => (
        <div key={employee.id} className="tracker__card">
          <Link to="/profile">
            <h2>Name: {employee.name}</h2>
            <h2>Role: {employee.role}</h2>
          </Link>
          <div className="tracker__card--counter">
            <Counter />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracker;
