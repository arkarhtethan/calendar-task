import MonthDaysGrid from "./components/MonthDaysGrid";
import { CalendarContext } from "./context/CalendarContext";
import CalendarHeader from "./components/CalendarHeader";
import { useContext } from "react";
import WeekDaysGrid from "./components/WeekDaysGrid";
import DayGrid from "./components/DayGrid";
import ListGrid from "./components/ListGrid";

function App() {
  const { gridType } = useContext(CalendarContext);
  const getGrid = () => {
    if (gridType === "month") {
      return <MonthDaysGrid />;
    } else if (gridType === "week") {
      return <WeekDaysGrid />;
    } else if (gridType === "list") {
      return <ListGrid />;
    }
    return <DayGrid />;
  };
  return (
    <div className="calendar">
      <CalendarHeader />
      <div className="calendar__main">{getGrid()}</div>
    </div>
  );
}

export default App;
