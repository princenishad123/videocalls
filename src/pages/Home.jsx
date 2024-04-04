import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [joinCall, setJoinCall] = useState("");

  // const a = "";

  const joinUrl = joinCall.slice(44);
  console.log(joinUrl);

  return (
    <div className="homePage">
      <h2 className="main-title">Create and Join Video Groups</h2>
      <div className="callsFeature">
        <div className="callCreate">
          <h3>Create Calls</h3>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            value={name}
          />
          <br />

          <Link to={`video/${name}`}>
            <button className="buttons">Create Call</button>
          </Link>
        </div>

        <hr />

        <div className="callCreate">
          <h3>Join Calls</h3>
          <input
            type="text"
            onChange={(e) => setJoinCall(e.target.value)}
            placeholder="Enter url"
            value={joinCall}
          />
          <br />
          <Link to={joinUrl}>
            <button className="button-create">Create Call</button>
          </Link>
        </div>
      </div>
      <p className="credits">Create by Prince Nishad</p>
    </div>
  );
};

export default Home;
