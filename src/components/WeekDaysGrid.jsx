import React, { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../context/CalendarContext";
import CalendarHeaderRow from "./CalendarHeaderRow";
import FAB from "./FAB";

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
  <div className="weeks__grid--body">{children}</div>
);

const WeeksGridItem = ({ children }) => (
  <div className="weeks__grid--body-item">{children}</div>
);

const WeeksGridItemText = ({ hour, show, day }) => {
  const { data } = useContext(CalendarContext);
  const extractedData = data[day?.format("D/M/YYYY")];
  const noteTime = false;
  const notes = extractedData && extractedData.notes ? extractedData.notes : [];
  return (
    <div className="weeks__grid--body-item__text">
      {show && (
        <p className="weeks__grid--body-item__text-hour">
          {hour === 0 ? "All Day" : `${hour} : 00`}
        </p>
      )}
      <div className="weeks__grid--body-item__text-event">
        {notes && !noteTime && hour === 0 && extractedData && (
          <>
            {notes &&
              !noteTime &&
              hour === 0 &&
              notes?.map((note) => <p style={{ fontSize: "12px" }}>{note}</p>)}
          </>
        )}
      </div>
    </div>
  );
};

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
    <div className="week">
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
                  <WeeksGridItemText
                    key={`-${index}`}
                    show={true}
                    hour={index}
                    day={days[0]}
                  />
                  {days.map((day, ii) => (
                    <WeeksGridItemText
                      key={`${ii}-${index}`}
                      show={false}
                      hour={index}
                      day={day}
                    />
                  ))}
                </WeeksGridItem>
              </>
            ))}
          <FAB />
        </WeeksGridBody>
      </WeeksGridContainer>
    </div>
  );
};

export default WeekDaysGrid;
