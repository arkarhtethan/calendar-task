import React from "react";

const CalendarHeaderRowContainer = ({ children }) => (
  <div className="calendar__row--header">{children}</div>
);
const CalendarHeaderRowCell = ({ label }) => {
  return <div className="calendar__row--header-cell">{label}</div>;
};
const CalendarHeaderRow = ({ children }) => {
  return (
    <CalendarHeaderRowContainer>
      {children ? (
        <>{children}</>
      ) : (
        <>
          <CalendarHeaderRowCell label="Sun" />
          <CalendarHeaderRowCell label="Mon" />
          <CalendarHeaderRowCell label="Tue" />
          <CalendarHeaderRowCell label="Wed" />
          <CalendarHeaderRowCell label="Thu" />
          <CalendarHeaderRowCell label="Fri" />
          <CalendarHeaderRowCell label="Sat" />
        </>
      )}
    </CalendarHeaderRowContainer>
  );
};

export default CalendarHeaderRow;
