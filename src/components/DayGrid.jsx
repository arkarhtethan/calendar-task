import React, { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";

const DaysGridContainer = ({ children }) => (
  <div className="days__grid">{children}</div>
);

const DaysGridHeader = ({ children }) => (
  <div className="days__grid--header">{children}</div>
);

const DaysGridBody = ({ children }) => (
  <div className="days__grid--body">{children}</div>
);

const DaysGridItem = ({ children, index }) => (
  <div className="days__grid--item">
    <p className="days__grid--item__text-hour">
      {index === 0 ? "All Day" : `${index} : 00`}
    </p>
    <p className="days__grid--item__text-event">{}</p>
  </div>
);

const DayGrid = () => {
  const { value } = useContext(CalendarContext);
  return (
    <DaysGridContainer>
      <DaysGridHeader>
        <p>{value?.format("dddd DD, MMMM YYYY")}</p>
      </DaysGridHeader>
      <DaysGridBody>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <DaysGridItem key={index} index={index}>
              {}
            </DaysGridItem>
          ))}
      </DaysGridBody>
    </DaysGridContainer>
  );
};

export default DayGrid;
