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
      this.date = new Date(date);
      this.location = location;
      this.points = points;
      this.note = note;
    }
  }

  const BANQUET = new Event(
    "Banquet",
    "Internal",
    "2024-04-28",
    "725 Gilman St",
    0,
    "Event Fee: $20 \nDress Code: Formal \nItinerary: Dinner, Casino theme games, Raffle \n+1s available"
  );

  const GM4 = new Event(
    "GM #4",
    "General Meeting",
    "2024-04-19",
    "Dwinelle",
    10,
    "Itinerary: FoG Presentation"
  );

  const NAMWOOK = new User(
    "Namwook",
    "sexypepe@berkeley.edu",
    "sexypepe",
    "member"
  )

  const [data, setData] = useState({
    members: [NAMWOOK],
    executives: [],
    events: [BANQUET, GM4],
  });

  const addEvent = (name, type, date, location, points, note) => {
    const newEvent = new Event(name, type, date, location, points, note);
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
