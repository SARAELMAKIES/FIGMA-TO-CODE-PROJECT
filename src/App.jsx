
import { useEffect } from "react";


import List from "./components/list";
import { useDispatch } from "react-redux";
import { addArrUserToState } from "./app/userSlice";
import Drawer from './components/Drawer';

function App() {

  let dispatch = useDispatch()
  useEffect(() => {
    fetch("/contacts.json") // טעינת הנתונים מהקובץ
      .then(response => response.json())
      .then(data => dispatch(addArrUserToState(data.contacts))) // עדכון הסטייט
      .catch(error => console.error("Error loading contacts:", error));
  }, []);

  return (
    <>
      <List />

      <Drawer />
    </>
  );
}

export default App;