import CalendarHeaderRow from "./components/CalendarHeaderRow";
import DaysGrid from "./components/DaysGrid";
import CalendarContextProvider from "./context/CalendarContext";
import CalendarHeader from "./components/CalendarHeader";

function App() {
  return (
    <CalendarContextProvider>
      <div className="calendar">
        <CalendarHeader />
        <div className="calendar__main">
          <CalendarHeaderRow />
          <DaysGrid />
        </div>
      </div>
    </CalendarContextProvider>
  );
}

export default App;
