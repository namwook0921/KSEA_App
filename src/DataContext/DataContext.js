import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  class User {
    constructor(name, email, password, type) {
      this.name = name;
      this.email = email;
      this.password = password;
      //   type for member/exec
      this.type = type;
      this.points = 0;
      this.major = "";
      this.class = "";
      this.fog = "";
      this.social = -1;
    }
  }

  class Event {
    constructor(name, type, date, location, points, note) {
      this.name = name;
      this.type = type;
      this.date = date;
      this.location = location;
      this.points = points;
      this.note = note;
    }
  }

  const BANQUET = new Event(
    "Banquet",
    "Internal",
    "4/28 (Sun)",
    "725 Gilman St",
    "N/A",
    "Event Fee: $20 \nDress Code: Formal \nItinerary: Dinner, Casino theme games, Raffle \n+1s available"
  );

  const [data, setData] = useState({
    members: [],
    executives: [],
    events: [BANQUET],
  });

  const addEvent = (name, type, date, location, points, note) => {
    const newEvent = Event(name, type, date, location, points, note);
    setData((prevData) => ({
      ...prevData,
      events: [...prevData.events, newEvent],
    }));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addEvent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
