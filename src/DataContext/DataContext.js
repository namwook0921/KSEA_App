import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const loadMembersData = async () => {
    try {
      const membersData = await AsyncStorage.getItem("members");
      if (membersData) {
        setData((prevData) => ({
          ...prevData,
          members: JSON.parse(membersData),
        }));
      }
    } catch (error) {
      console.error("Failed to load members data from storage:", error);
    }
  };

  const saveMembersData = async (members) => {
    try {
      await AsyncStorage.setItem("members", JSON.stringify(members));
    } catch (error) {
      console.error("Failed to save members data to storage:", error);
    }
  };

  useEffect(() => {
    loadMembersData();
  }, []);

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
    "2024-04-19",
    "Dwinelle",
    10,
    "Itinerary: FoG Presentation",
    "None"
  );

  const NAMWOOK = new User(
    "Namwook", // Name
    "sexypepe@berkeley.edu",
    "sexypepe",
    "Rizzology",
    "member",
    "App Dev",
    "Sophomore"
  );

  const [data, setData] = useState({
    members: [NAMWOOK],
    executives: [],
    events: [BANQUET, GM4],
    currentIndex: 0,
    currentMember: NAMWOOK,
  });

  const addEvent = (name, type, date, location, points, note) => {
    const newEvent = new Event(name, type, date, location, points, note);
    setData((prevData) => ({
      ...prevData,
      events: [...prevData.events, newEvent],
    }));
  };

  const addUser = (name, email, password, major, type, grade) => {
    const newUser = new User(name, email, password, major, type, grade);
    setData((prevData) => {
      const updatedMembers = [...prevData.members, newUser];
      saveMembersData(updatedMembers);
      return { ...prevData, members: updatedMembers };
    });
  };

  const setCurrentIndex = (index) => {
    setData((prevData) => ({
      ...prevData,
      currentIndex: index,
    }));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addEvent,
        addUser,
        setCurrentIndex,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
