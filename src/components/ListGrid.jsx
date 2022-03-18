import React, { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { ClockCircleOutlined, DeleteOutlined } from "@ant-design/icons";
// import FAB from "./FAB";

const ListGridHeader = ({ value }) => {
  return (
    <div className="flex jcc list__grid-header">
      <p className="header-1 font-bold p-md">{value.format("MMMM, YYYY")}</p>
    </div>
  );
};

const ListGridItem = ({ item }) => {
  return (
    <div className="list__item">
      <div className="flex jcsb">
        <p className="list__item-title">{item.title}</p>
        <DeleteOutlined className="list__item-delIcon" />
      </div>
      <div className="flex jcsb">
        <div className="list__item--date flex aic jcc">
          <p className="list__item--date-icon">
            <ClockCircleOutlined />
          </p>
          <p className="list__item--date-text">
            {item.date.format("dddd, MM, YYYY")}
          </p>
        </div>
        <div className="flex aic jcc">
          <div className={`list__item-badge bg-${item.badgeColor}`} />
          <p className="list__item-category">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

const ListGrid = () => {
  const { value } = useContext(CalendarContext);
  const mockedData = [
    {
      date: value,
      title: "New Year's Day",
      category: "Public Holiday",
      badgeColor: "red",
    },
    {
      date: value,
      title: "New Year's Day",
      category: "Public Holiday",
      badgeColor: "green",
    },
  ];
  return (
    <>
      <div className="list">
        <ListGridHeader value={value} />
        <div className="list__items--container ">
          <div className="list__items">
            {mockedData.map((data) => (
              <ListGridItem item={data} />
            ))}
          </div>
        </div>
      </div>
      {/* <FAB /> */}
    </>
  );
};

export default ListGrid;
