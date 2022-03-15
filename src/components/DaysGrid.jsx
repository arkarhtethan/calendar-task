import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../context/CalendarContext";
import CalendarCell from "./CalendarCell";
import FAB from "./FAB";

const DaysGridContainer = ({ children }) => (
  <div className="days__grid">{children}</div>
);

const DaysGrid = () => {
  const { calendar } = useContext(CalendarContext);
  return (
    <DaysGridContainer>
      {calendar.map((weeks) => weeks.map((day) => <CalendarCell day={day} />))}
      <FAB />
    </DaysGridContainer>
  );
};

export default DaysGrid;
