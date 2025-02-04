"use client";

import { addMinutes, startOfDay } from "date-fns";

const isMobileOrTablet = () => typeof window !== "undefined" && window.innerWidth < 1024;

export const CALENDAR_CONFIG = {
  initialView: "timeGridFiveDay",
  views: {
    timeGridFiveDay: {
      type: "timeGrid",
      duration: { days: 5 },
    },
  },
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  expandRows: true,
  slotMinTime: "09:00:00",
  slotMaxTime: "18:00:00",
  height: "auto",
  contentHeight: "auto",
  // Dynamic slot duration based on screen size
  slotDuration: isMobileOrTablet() ? "01:00:00" : "00:30:00",
  scrollTime: "09:00:00",
  allDaySlot: false,
  headerToolbar: {
    start: "prev,next",
    center: "title",
    end: "",
  },
  buttonText: {
    prev: "Previous",
    next: "Next",
  },
  buttonIcons: {
    prev: "chevron-left",
    next: "chevron-right",
  },
  selectConstraint: {
    startTime: "09:00:00",
    endTime: "18:00:00",
    dows: [1, 2, 3, 4, 5],
  },
  slotLabelFormat: {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    meridiem: false,
  },
  eventTimeFormat: {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    meridiem: false,
  },
  titleFormat: {
    year: "numeric",
    month: "short",
    day: "2-digit",
  },
  selectOverlap: false,
  validRange: {
    start: startOfDay(new Date()),
  },
  selectAllow: (selectInfo: { end: Date; start: Date }) => {
    const now = new Date();
    const roundedNow = addMinutes(now, 30 - (now.getMinutes() % 30));

    if (selectInfo.start < roundedNow) {
      return false;
    }

    const duration = selectInfo.end.getTime() - selectInfo.start.getTime();
    // Allow 1-hour selections on mobile/tablet and 30-minute selections on desktop
    return isMobileOrTablet() ? duration === 60 * 60 * 1000 : duration === 30 * 60 * 1000;
  },
  nowIndicator: true,
  navLinks: false,
  editable: false,
  fixedWeekCount: false,
  showNonCurrentDates: true,
  initialDate: new Date(),
  buttonClassNames: "calendar-nav-button",
  dayHeaderFormat: { weekday: "short", day: "numeric" },
  longPressDelay: 100,
  eventLongPressDelay: 100,
  selectLongPressDelay: 100,
  unselectAuto: false,
  selectMinDistance: 0,
  // Handle window resize by re-rendering the calendar
  handleWindowResize: true,
  // Update slot duration when the component mounts and on window resize
  datesSet: function (arg) {
    const calendar = arg.view.calendar;
    const newSlotDuration = isMobileOrTablet() ? "01:00:00" : "00:30:00";
    const currentSlotDuration = calendar.getOption("slotDuration");

    if (currentSlotDuration !== newSlotDuration) {
      calendar.setOption("slotDuration", newSlotDuration);
    }
  },
} as const;
