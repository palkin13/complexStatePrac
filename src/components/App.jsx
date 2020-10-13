import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    // console.log(newName);
    // console.log(newInput);

    setContact( prevValue => {
      if( inputName === "fName"){
        return {
          fName: newValue,
          lName : prevValue.lName,
          email : prevValue.email
         };
        }
        else if( inputName === "lName"){
          return {
            fName :prevValue.fName,
            lName: newValue,
            email: prevValue.email
          };
        }
        else if( inputName ==="email"){
          return{
            fName:prevValue.fName,
            lName:prevValue.lName,
            email : newValue
          };
        }
    });

    
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={contact.fName} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" value = {contact.lName} />
        <input onChange={handleChange} name="email" placeholder="Email" value = {contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
