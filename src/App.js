import { useState } from "react";
import "./App.css";

import { Forms } from "./components/Forms";
import { UserList } from "./components/UserList";

function App() {
  // const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addUser = (name) => {
    setList([...list, name]);
  };

  // const handleOnChange = (e) => {
  //   //Getting real-time typing Display
  //   //synthetic base event
  //   const { value } = e.target; //destructuring
  //   setName(value); //executing function
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   setList([...list, name]);
  // };

  return (
    <>
      <div
        className="wrapper"
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <div
          className="userList"
          style={{ boxShadow: "0 0 10px grey", padding: "2rem" }}
        >
          <Forms addUser={addUser} />
          <hr />
          <UserList list={list} />
        </div>
      </div>
    </>
  );
}

export default App;
