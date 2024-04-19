import React, { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

class User {
  constructor(name, email, password, major, type, fog = "", grade) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.major = major;
    //   type for member/exec
    this.type = type;
    this.points = 0;
    this.grade = grade;
    this.fog = fog;
    this.social = -1;
  }
}

class Event {
  constructor(name, type, date, location, points, note, register_link) {
    this.name = name;
    this.type = type;
    this.date = new Date(date);
    this.location = location;
    this.points = points;
    this.note = note;
    this.register_link = register_link;
  }
}

export const DataProvider = ({ children }) => {
  const NAMWOOK = new User(
    "Namwook", // Name
    "namwook0921@berkeley.edu",
    "1234",
    "Math/CS",
    "member",
    "App Dev",
    "Sophomore"
  );
  NAMWOOK.points = 50;

  const FABIAN = new User(
    "Fabian", // Name
    "fabiankmroh@berkeley.edu",
    "4321",
    "DS",
    "member",
    "App Dev",
    "Freshman"
  );
  FABIAN.points = 70;

  const JAEWON = new User(
    "Jaewon",
    "jwhur38@berkeley.edu",
    "1234",
    "EECS",
    "Social Chair",
    "App Dev",
    "Junior"
  );
  JAEWON.points = 100;

  const HWIDONG = new User(
    "Hwidong",
    "hwidium@berkeley.edu",
    "1234",
    "MSE",
    "Member",
    "None",
    "Freshman"
  );
  HWIDONG.points = 120;

  const YOONYEE = new User(
    "Yoonyee",
    "ysong@berkeley.edu",
    "1234",
    "BioEngineering",
    "President",
    "3D Blender",
    "Sophomore"
  );
  YOONYEE.points = 200;

  const BANQUET = new Event(
    "Banquet",
    "Internal",
    "2024-04-28",
    "725 Gilman St",
    0,
    "Event Fee: $20 \nDress Code: Formal \nItinerary: Dinner, Casino theme games, Raffle \n+1s available",
    "https://forms.gle/G6GmfoDCofitvS5Q7"
  );

  const GM4 = new Event(
    "GM #4",
    "General Meeting",
    "2024-04-20",
    "Dwinelle",
    10,
    "Itinerary: FoG Presentation",
    "None"
  );

  const MINGLES9 = new Event(
    "Mingles #9:\nChicken + Beer",
    "Mingles",
    "2024-04-22",
    "3310 Powell St, Emeryville, CA 94608",
    5,
    "Price: / n\nTransportation: Uber",
    "DM to Host"
  )

  const MINGLES10 = new Event(
    "Mingles #10:\nWhiskey Tasting",
    "Mingles",
    "2024-04-26",
    "2515 Benvenue Ave",
    5,
    "Cost: $35\nMax: 6 People",
    "DM to Host"
  )

  const [data, setData] = useState({
    members: [NAMWOOK, FABIAN, JAEWON, HWIDONG, YOONYEE],
    executives: [],
    events: [GM4, MINGLES9, MINGLES10, BANQUET],
    currentIndex: 0,
    currentMember: null,
  });

  const addEvent = (name, type, date, location, points, note) => {
    const newEvent = new Event(name, type, date, location, points, note);
    setData((prevData) => ({
      ...prevData,
      events: [...prevData.events, newEvent],
    }));
  };

  const addUser = (name, email, password, major, birthdate, grade) => {
    const newUser = new User(
      name,
      email,
      password,
      major,
      "member",
      "App Dev",
      grade
    );
    setData((prevData) => ({
      ...prevData,
      members: [...prevData.members, newUser],
    }));
  };

  const setCurrentIndex = (index) => {
    setData((prevData) => ({
      ...prevData,
      currentIndex: index,
    }));
  };

  const setCurrentMember = (user) => {
    setData((prevData) => ({
      ...prevData,
      currentMember: user,
    }));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addEvent,
        addUser,
        setCurrentIndex,
        setCurrentMember,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
