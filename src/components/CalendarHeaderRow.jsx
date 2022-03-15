import React from "react";
import CalendarHeaderRowCell from "./CalendarHeaderRowCell";

const CalendarHeaderRowContainer = ({ children }) => (
  <div className="calendar__row--header">{children}</div>
);

const CalendarHeaderRow = () => {
  return (
    <CalendarHeaderRowContainer>
      <CalendarHeaderRowCell label="Sun" />
      <CalendarHeaderRowCell label="Mon" />
      <CalendarHeaderRowCell label="Tue" />
      <CalendarHeaderRowCell label="Wed" />
      <CalendarHeaderRowCell label="Thu" />
      <CalendarHeaderRowCell label="Fri" />
      <CalendarHeaderRowCell label="Sat" />
    </CalendarHeaderRowContainer>
  );
};

export default CalendarHeaderRow;
