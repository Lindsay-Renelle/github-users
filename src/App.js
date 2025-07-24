
import React, { useState, useEffect } from "react";
import "./App.css";

function App () {
  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("https://api.github.com/users")
  .then((response) => response.json()) 
  .then((data) => setUsers(data.slice(0, 4))) 
  .catch((error) => console.error("Erreur :", error)); 
}, []);

return (
  <div className= "App">
    <header>
      <h1>Github users</h1>
    </header>

    <main>
      <div className="user-grid">
        {users.map((user)=> (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login}/>
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.html_url}
            </a>
          </div>
        ))}
      </div>
    </main>
  </div>
);
}
export default App;