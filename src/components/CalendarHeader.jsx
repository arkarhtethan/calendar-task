import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";

const CalendarHeaderContainer = ({ children }) => (
  <div className="calendar__header">{children}</div>
);

const CalendarHeaderLeft = ({ children }) => (
  <div className="calendar__header--left">{children}</div>
);

const CalendarHeaderRight = ({ children }) => (
  <div className="calendar__header--right">{children}</div>
);
const CalendarHeaderRightItem = ({ children, isActive = false }) => (
  <div
    className={`calendar__header--right__item ${
      isActive && "calendar__header--right__item-active"
    }`}
  >
    {children}
  </div>
);

const CalendarHeader = () => {
  const { value, onPreviousClick, onNextClick } = useContext(CalendarContext);
  return (
    <CalendarHeaderContainer>
      <CalendarHeaderLeft>
        <LeftOutlined onClick={() => onPreviousClick()} />
        <p>{value?.format("YYYY, MMMM")}</p>
        <RightOutlined onClick={() => onNextClick()} />
      </CalendarHeaderLeft>
      <CalendarHeaderRight>
        <CalendarHeaderRightItem isActive={true}>
          <p>Month</p>
        </CalendarHeaderRightItem>
        <CalendarHeaderRightItem className="calendar__header--right__item">
          <p>Week</p>
        </CalendarHeaderRightItem>
        <CalendarHeaderRightItem className="calendar__header--right__item">
          <p>Day</p>
        </CalendarHeaderRightItem>
        <CalendarHeaderRightItem className="calendar__header--right__item">
          <p>List</p>
        </CalendarHeaderRightItem>
      </CalendarHeaderRight>
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
