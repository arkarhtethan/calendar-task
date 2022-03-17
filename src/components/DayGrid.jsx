import { ClockCircleOutlined } from "@ant-design/icons";
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

const DaysGridItem = ({ children, hour }) => {
  const { data, value } = useContext(CalendarContext);
  const extractedData = data[value?.format("D/M/YYYY")];
  const noteTime = false;
  const notes = extractedData && extractedData.notes ? extractedData.notes : [];
  return (
    <div className="days__grid--item">
      <p className="days__grid--item__text-hour">
        {hour === 0 ? "All Day" : `${hour} : 00`}
      </p>
      {notes && !noteTime && hour === 0 && (
        <div className="days__grid--item__text-event flex jcsb aic">
          <div>
            <div className="flex">
              {notes &&
                !noteTime &&
                hour === 0 &&
                notes?.map((note) => (
                  <p style={{ fontSize: "12px" }}>{note}</p>
                ))}
            </div>
            <div className="flex aic jcc">
              <p className="list__item--date-icon">
                <ClockCircleOutlined />
              </p>
              <p className="list__item--date-text">
                {value.format("dddd , D MMMM , YYYY")}
              </p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}> All Day</p>
          </div>
        </div>
      )}
    </div>
  );
};

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
            <DaysGridItem key={index} hour={index}>
              {}
            </DaysGridItem>
          ))}
      </DaysGridBody>
    </DaysGridContainer>
  );
};

export default DayGrid;
