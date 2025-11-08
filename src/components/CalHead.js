import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
export default function CalHead() {
  const { monthIndex: currMonth, setMonthIndex: setCurrMonth } = useContext(GlobalContext);
  function goToPrevMonth() {
    setCurrMonth(currMonth - 1);
  }
  function goToNextMonth() {
    setCurrMonth(currMonth + 1);
  }
  function handleReset() {
    setCurrMonth(
      currMonth === dayjs().month()
        ? currMonth + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        Calendar
      </h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={goToPrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-black-400 mx-4">
          To previous_month
        </span>
      </button>
      <button onClick={goToNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-black-400 mx-4">
          To next_month
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), currMonth)).format(
          "DD MM YYYY"
        )}
      </h2>
    </header>
  );
}
