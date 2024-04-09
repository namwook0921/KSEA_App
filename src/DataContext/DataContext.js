import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  class user {
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

  const [data, setData] = useState({
    members: [],
    executives: [],
    events: [],
  });

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
