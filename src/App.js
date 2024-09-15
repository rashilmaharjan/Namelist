import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = (e) => {
    //Getting real-time typing Display
    //synthetic base event
    const { value } = e.target; //destructuring
    setName(value); //executing function
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setList([...list, name]);
  };

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
          <div className="display">{name}</div>
          <div className="form">
            <form action="" onSubmit={handleOnSubmit}>
              <input type="text" onChange={handleOnChange} />
              <button>Add User</button>
            </form>
            <hr />
          </div>
          <div className="list">
            <ul>
              {list.map((item, i) => {
                //{list.map((item, i) => (<li key={i}>{item}</li>))} //different method
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
