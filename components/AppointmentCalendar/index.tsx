import * as React from "react";
import Calendar from "react-calendar";
import cx from "classnames";
import dayjs from "dayjs";
import _ from "lodash";
import config from "../../config";
import { SlotT, AppointmentT } from "../../types";
import { generateTimeSlots } from "../../utils";
import axios from "axios";
import Loading from "../Loading";

interface AppointmentCalendarProps {
  onSelectSlot: (slot?: SlotT) => void;
  timeSlot?: SlotT;
}

const { NO_OF_EMPLOYEES: EMPLOYEES } = config;

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({
  onSelectSlot,
  timeSlot,
}) => {
  const [date, setDate] = React.useState(new Date());
  const [timeSlots, setTimeSlots] = React.useState<SlotT[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [booked, setBooked] = React.useState<{ [key: string]: AppointmentT[] }>(
    {}
  );

  const handleDayClick = async (value: Date, e: any) => {
    setTimeSlots([]);
    onSelectSlot(undefined);
    const date = dayjs(value).format("YYYY-MM-DD");
    // Get appointments for the selected day if any.
    await getDayAppointments(date);
    // Generate time slot fot the selected day.
    const slots = generateTimeSlots(date);
    setTimeSlots(slots);
  };

  const getDayAppointments = async (date: string) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`/api/appointments?time=${date}`);
      const groupedAppointments = _.groupBy(
        res.data.map((app: AppointmentT) => {
          return {
            ...app,
            time: dayjs(app.time).format("hh:mm A"),
          };
        }),
        "time"
      );

      setBooked(groupedAppointments);
      setIsLoading(false);
    } catch (e: any) {
      console.log(e?.response?.data || e?.message);
      setIsLoading(false);
    }
  };

  const handleSelectTime = (slot: SlotT) => {
    onSelectSlot(slot);
  };

  return (
    <>
      <div className="row appointment-calendar">
        <div className="col-7 appointment-calendar__container">
          <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
            minDetail="year"
            maxDate={new Date(dayjs().add(3, "months").format("YYYY-MM-DD"))}
            onClickDay={handleDayClick}
            tileDisabled={(props) => dayjs(props.date).format("dd") === "Su"}
          />
        </div>
        <div className="col-5 slot-container">
          <div className="row">
            {isLoading && <Loading size="medium" />}

            {timeSlots.map((slot) => (
              <div
                onClick={
                  booked[slot.time] && booked[slot.time].length >= EMPLOYEES
                    ? undefined
                    : () => handleSelectTime(slot)
                }
                key={slot.time}
                className={cx({
                  slot: true,
                  "slot--selected": _.isEqual(slot, timeSlot),
                  "slot--disabled":
                    booked[slot.time] && booked[slot.time].length >= EMPLOYEES,
                  "slot--available":
                    !booked[slot.time] ||
                    (booked[slot.time] && booked[slot.time].length < EMPLOYEES),
                })}
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCalendar;
