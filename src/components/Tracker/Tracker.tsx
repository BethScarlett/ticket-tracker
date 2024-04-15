import Counter from "../Counter/Counter";
import "./Tracker.scss";

type Employee = {
  team: Team[];
};

const Tracker = ({ team }: Employee) => {
  const employeeArr = [...team];
  return (
    <div>
      {employeeArr.map((employee: Team) => (
        <div className="tracker">
          <h2>Name: {employee.name}</h2>
          <h2>Role: {employee.role}</h2>
          <Counter />
        </div>
      ))}
    </div>
  );
};

export default Tracker;
