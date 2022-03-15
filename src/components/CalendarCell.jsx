import React, { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../context/CalendarContext";

const CalendarCell = ({ day }) => {
  const [className, setClassName] = useState(["days__grid--item"]);
  const [notes, setNotes] = useState([]);
  const { data } = useContext(CalendarContext);

  useEffect(() => {
    if (data[day?.format("D/M/YYYY")]) {
      const { classes, notes } = data[day?.format("D/M/YYYY")];
      if (classes) {
        setClassName((prev) => [...prev, classes]);
      }
      if (notes) {
        setNotes(notes);
      }
    }
  }, [data, day]);

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
