import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";

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
  return (
    <CalendarHeaderContainer>
      <CalendarHeaderLeft>
        <LeftOutlined />
        <p>February, 2022</p>
        <RightOutlined />
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
