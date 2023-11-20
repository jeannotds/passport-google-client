import React from "react";

function Home(userDetails) {
  const user = userDetails.user;
  function logout(userDetails) {
    window.open("http://localhost:8080/auth/logout", "_self");
  }

  return (
    <div>
      <h1 style={{ color: "blue" }}>Home</h1>
      <div>
        <input type="text" defaultValue={user.name} placeholder="username" />
        <input type="email" defaultValue={user.email} placeholder="email" />
        <button type="submit" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Home;
