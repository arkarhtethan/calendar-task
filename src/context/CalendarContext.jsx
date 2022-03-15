import React, { createContext, useState } from "react";

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
  return (
    <CalendarContext.Provider value={{ data, setData }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
