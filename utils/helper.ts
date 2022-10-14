import axios from "axios";
import dayjs from "dayjs";
import config from "../config";
import { SlotT } from "../types";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

/**
 * Generates the time slots for appointment
 * @param date The date selected on the calendar
 */
export const generateTimeSlots = (date: string) => {
  const {
    SERVICE_AVERAGE_DURATION: DURATION,
    OPENING_TIME,
    CLOSING_TIME,
  } = config;

  let slots: SlotT[] = [];

  for (
    // i is the opening time of the day
    let i = dayjs(`${date} ${OPENING_TIME}`);
    // as long as the time is less that the closing time
    i.isBefore(`${date} ${CLOSING_TIME}`);
    // add the average duration to get the next available time
    i = i.add(DURATION, "hours")
  ) {
    // if not, start from the next available hour
    if (dayjs().isBefore(i, "hour")) {
      // Add the next available hour to the time slots
      slots.push({
        time: i.format("hh:mm A"),
        date: i.format("YYYY-MM-DD"),
      });
    }
  }

  return slots;
};
