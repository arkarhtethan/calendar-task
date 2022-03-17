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
const CalendarHeaderRightItem = ({ children, isActive = false, ...rest }) => (
  <div
    {...rest}
    className={`calendar__header--right__item ${
      isActive ? "calendar__header--right__item-active" : ""
    }`}
  >
    {children}
  </div>
);

const CalendarHeader = () => {
  const { value, onPreviousClick, onNextClick, setGridType, gridType } =
    useContext(CalendarContext);
  return (
    <CalendarHeaderContainer>
      <CalendarHeaderLeft>
        <LeftOutlined onClick={() => onPreviousClick()} />
        <p>{value?.format("YYYY, MMMM")}</p>
        <RightOutlined onClick={() => onNextClick()} />
      </CalendarHeaderLeft>
      <CalendarHeaderRight>
        <CalendarHeaderRightItem
          isActive={gridType === "month"}
          onClick={() => setGridType("month")}
        >
          <p>Month</p>
        </CalendarHeaderRightItem>
        <CalendarHeaderRightItem
          isActive={gridType === "week"}
          className="calendar__header--right__item"
          onClick={() => setGridType("week")}
        >
          <p>Week</p>
        </CalendarHeaderRightItem>
        <CalendarHeaderRightItem
          isActive={gridType === "day"}
          className="calendar__header--right__item"
          onClick={() => setGridType("day")}
        >
          <p>Day</p>
        </CalendarHeaderRightItem>
        <CalendarHeaderRightItem
          isActive={gridType === "list"}
          className="calendar__header--right__item"
          onClick={() => setGridType("list")}
        >
          <p>List</p>
        </CalendarHeaderRightItem>
      </CalendarHeaderRight>
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
