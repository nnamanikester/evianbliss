import * as React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import cx from "classnames";

interface AppointmentCalendarProps {}

interface SlotT {
  id: string;
  time: string;
  slots: number;
}

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = () => {
  const [date, setDate] = React.useState(new Date());

  const handleDayClick = (value: Date, e: any) => {};

  return (
    <>
      <div className="row appointment-calendar">
        <div className="col-7 appointment-calendar__container">
          <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
            minDetail="year"
            maxDate={new Date(moment().add(3, "months").format("YYYY-MM-DD"))}
            onClickDay={handleDayClick}
          />
        </div>
        <div className="col-5 slot-container">
          <div className="row">
            <div
              className={cx({
                slot: true,
                "slot--selected": false,
                "slot--disabled": true,
              })}
            >
              09:00 AM
            </div>
            <div
              className={cx({
                slot: true,
                "slot--selected": false,
                "slot--disabled": false,
                "slot--available": true,
              })}
            >
              11:00 AM
            </div>
            <div
              className={cx({
                slot: true,
                "slot--selected": true,
                "slot--disabled": false,
              })}
            >
              01:00 PM
            </div>
            <div
              className={cx({
                slot: true,
                "slot--selected": false,
                "slot--disabled": false,
                "slot--available": true,
              })}
            >
              03:00 PM
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCalendar;
