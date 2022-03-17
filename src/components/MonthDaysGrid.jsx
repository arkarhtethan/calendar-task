import React, { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";
import CalendarCell from "./CalendarCell";
import CalendarHeaderRow from "./CalendarHeaderRow";
import FAB from "./FAB";

const DaysGridContainer = ({ children }) => (
  <div className="months__grid">{children}</div>
);

const MonthDaysGrid = () => {
  const { calendar } = useContext(CalendarContext);
  return (
    <>
      <CalendarHeaderRow />
      <DaysGridContainer>
        {calendar.map((weeks) =>
          weeks.map((day) => (
            <CalendarCell key={day.format("DD/MMMM/YYYY")} day={day} />
          ))
        )}
      </DaysGridContainer>
      <FAB />
    </>
  );
};

export default MonthDaysGrid;
