import React, { createContext, useEffect, useState } from "react";
import moment from "moment";

export const CalendarContext = createContext();

const CalendarContextProvider = ({ children }) => {
  const [data, setData] = useState({
    "28/2/2022": { classes: "bg-white" },
    "1/3/2022": { classes: "bg-white", notes: ["Labour Day"] },
    "2/3/2022": { classes: "bg-white", notes: ["Summer Break", "p1,p2,p3"] },
    "3/3/2022": { classes: "bg-white" },
    "4/3/2022": { classes: "bg-white" },
    "2/4/2022": { classes: "bg-white" },
    "1/4/2022": { classes: "bg-white" },
    "31/3/2022": { classes: "bg-white" },
    "30/3/2022": { classes: "bg-white" },
    "29/3/2022": { classes: "bg-white" },
  });
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    const setUpCalendar = () => {
      const startDay = value.clone().startOf("month").startOf("week");
      const endDay = value.clone().endOf("month").endOf("week");
      const day = startDay.clone().subtract(1, "day");
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
    setUpCalendar();
  }, [value]);

  const onPreviousClick = () => {
    setValue(value.clone().subtract(1, "month"));
  };
  const onNextClick = () => {
    setValue(value.clone().add(1, "month"));
  };

  return (
    <CalendarContext.Provider
      value={{ data, setData, calendar, onPreviousClick, onNextClick, value }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
