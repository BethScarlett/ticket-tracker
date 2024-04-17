import "./App.scss";
import Tracker from "./components/Tracker/Tracker";
import team from "./data/team";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <Tracker team={team} />
      </div>
    </div>
  );
};

export default App;
