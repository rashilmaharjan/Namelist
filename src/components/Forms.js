import React, { useState } from "react";
import { Display } from "./Display";

export const Forms = ({ addUser }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setList([...list, name]);
    addUser(name);
  };

  return (
    <div className="Forms">
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button>Add User</button>
      </form>
    </div>
  );
};
