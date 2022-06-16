import { useState, createContext, useEffect } from "react";

export const ListContext = createContext();

const SAVED_ITEMS = "savedItems";

export const ListContextProvider = (props) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setTaskList(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(taskList));
  }, [taskList]);

  return (
    <ListContext.Provider value={[taskList, setTaskList]}>
      {props.children}
    </ListContext.Provider>
  );
};
