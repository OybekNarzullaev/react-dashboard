import React from "react";
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
  MonthAgenda,
  TimelineMonth,
  TimelineViews,
} from "@syncfusion/ej2-react-schedule";
import { Header } from "../components";

import { scheduleData } from "../data/dummy";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calendar" category="App" />
      <ScheduleComponent
        monthsCount={12}
        height="650px"
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            DragAndDrop,
            Resize,
            MonthAgenda,
            TimelineViews,
            TimelineMonth,
          ]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
