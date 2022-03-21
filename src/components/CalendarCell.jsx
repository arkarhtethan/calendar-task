import React, { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../context/CalendarContext";
import useMounted from "../hooks/useMounted";

const CalendarCell = ({ day }) => {
  const [className, setClassName] = useState(["months__grid--item"]);
  const [notes, setNotes] = useState([]);
  const { data } = useContext(CalendarContext);
  const isMounted = useMounted();

  useEffect(() => {
    if (data[day?.format("D/M/YYYY")]) {
      const { classes, notes } = data[day?.format("D/M/YYYY")];
      if (isMounted) {
        if (classes) {
          setClassName((prev) => [...prev, classes]);
        }
        if (notes) {
          setNotes(notes);
        }
      }
    }
  }, [data, day, isMounted]);

  return (
    <div className={className.join(" ")}>
      <p>{day?.format("D")}</p>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
    </div>
  );
};

export default CalendarCell;
