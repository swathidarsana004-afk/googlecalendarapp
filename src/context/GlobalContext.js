import React from "react";

const GlobalContext = React.createContext({
  calendarMonthIndex: 0,
  setCalendarMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  selectedDay: null,
  setSelectedDay: (day) => {},
  displayEventModal: false,
  setDisplayEventModal: () => {},
  dispatchCalendarEvent: ({ type, payload }) => {},
  savedEvents: [],
  activeEvent: null,
  setActiveEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
  filteredEvents: [],
});

export default GlobalContext;
