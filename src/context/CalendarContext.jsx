import React, { createContext, useCallback, useEffect, useState } from "react";
import moment from "moment";
import useMounted from "../hooks/useMounted";

export const CalendarContext = createContext();

const CalendarContextProvider = ({ children }) => {
  const isMounted = useMounted();

  const [data, setData] = useState({
    "28/2/2022": { classes: "bg-white" },
    "1/3/2022": { classes: "bg-white", notes: ["Labour Day"] },
    "17/3/2022": { classes: "bg-white", notes: ["Summer Break", "p1,p2,p3"] },
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
  const [gridType, setGridType] = useState("month");

  const setUpCalendar = useCallback(() => {
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const tempCalendar = [];
    while (day.isBefore(endDay, "day")) {
      if (!isMounted) {
        return;
      }
      tempCalendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    if (isMounted) {
      setCalendar(tempCalendar);
    }
  }, [isMounted, value]);

  useEffect(() => {
    setUpCalendar();
    return () => {};
  }, []);

  const onPreviousClick = () => {
    setValue(value.clone().subtract(1, "month"));
  };
  const onNextClick = () => {
    setValue(value.clone().add(1, "month"));
  };

  return (
    <CalendarContext.Provider
      value={{
        data,
        setData,
        calendar,
        onPreviousClick,
        onNextClick,
        value,
        gridType,
        setGridType,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
