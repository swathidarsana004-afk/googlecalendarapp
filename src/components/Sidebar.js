import React from "react";
import CreateEventButton from "./CreateEvent";
import NewCalendar from "./NewCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <NewCalendar />
      <Labels />
    </aside>
  );
}
