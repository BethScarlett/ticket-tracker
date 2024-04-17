import "./App.scss";
import Tracker from "./components/Tracker/Tracker";
import team from "./data/team";

const App = () => {
  return (
    <div className="container">
      <h1 className="container__heading">Ticket Tracker</h1>
      <div>
        <Tracker team={team} />
      </div>
    </div>
  );
};

export default App;
