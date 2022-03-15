import moment from "moment";
import React, { useEffect, useState } from "react";
import CalendarCell from "./CalendarCell";
import FAB from "./FAB";

const DaysGridContainer = ({ children }) => (
  <div className="days__grid">{children}</div>
);

const DaysGrid = () => {
  const [calendar, setCalendar] = useState([]);

  const value = moment();
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");

  useEffect(() => {
    setUpCalendar();
  }, []);

  const setUpCalendar = () => {
    const tempCalendar = [];
    while (day.isBefore(endDay, "day")) {
      tempCalendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(tempCalendar);
  };
  return (
    <DaysGridContainer>
      {calendar.map((weeks) => weeks.map((day) => <CalendarCell day={day} />))}
      <FAB />
    </DaysGridContainer>
  );
};

export default DaysGrid;
