import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("First name & Last name should not be empty");
      return;
    }
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(firstName) || !regex.test(lastName)) {
      alert("Fullname should not contain any special character or number");
      setFirstName("");
      setLastName("");
      setFullName("");
      return;
    }
    setFullName(`${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <main>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="firstName">First Name :</label>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="item">
          <label htmlFor="firstName">Last Name :</label>
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName.length > 0 && <p>Full Name: {fullName}</p>}
    </main>
  );
}

export default App;
