import React, { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../context/CalendarContext";
import CalendarHeaderRow from "./CalendarHeaderRow";

const WeeksGridContainer = ({ children }) => (
  <div className="weeks__grid">{children}</div>
);

const WeekCell = ({ day }) => (
  <div className="weeks__grid-cell">{day.format("DD")}</div>
);

const WeeksGridHeader = ({ children }) => (
  <div className="weeks__grid-header">{children}</div>
);

const WeeksGridBody = ({ children }) => (
  <div className="weeks__grid-body">{children}</div>
);

const WeeksGridItem = ({ children }) => (
  <div className="weeks__grid--body-item">{children}</div>
);

const WeeksGridItemText = ({ children, rowIndex, show }) => (
  <div className="weeks__grid--body-item__text">
    {show && (
      <p className="weeks__grid--body-item__text-hour">
        {rowIndex === 0 ? "All Day" : `${rowIndex} : 00`}
      </p>
    )}
    <p className="weeks__grid--body-item__text-event">{}</p>
  </div>
);

const WeekDaysGrid = () => {
  const [days, setDays] = useState([]);
  const { value } = useContext(CalendarContext);

  useEffect(() => {
    const setUpCalendar = () => {
      const startDay = value.clone().startOf("week");
      const endDay = value.clone().endOf("week");
      const day = startDay.clone().subtract(1, "day");
      const tempDays = [];
      while (day.isBefore(endDay, "day")) {
        tempDays.push(day.add(1, "day").clone());
      }
      setDays(tempDays);
    };
    setUpCalendar();
  }, [value]);

  return (
    <>
      <CalendarHeaderRow />
      <WeeksGridContainer>
        <WeeksGridHeader>
          {days.map((day) => (
            <WeekCell day={day} />
          ))}
        </WeeksGridHeader>
        <WeeksGridBody>
          {Array(25)
            .fill(0)
            .map((_, index) => (
              <>
                <WeeksGridItem>
                  {Array(7)
                    .fill(0)
                    .map((_, ii) => (
                      <WeeksGridItemText show={ii === 0} rowIndex={index}>
                        {ii}
                      </WeeksGridItemText>
                    ))}
                </WeeksGridItem>
              </>
            ))}
        </WeeksGridBody>
        {/* <FAB /> */}
      </WeeksGridContainer>
    </>
  );
};

export default WeekDaysGrid;
