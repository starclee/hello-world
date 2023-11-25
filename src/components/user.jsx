import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userName } = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/users.json"); // Fetch from the public folder
        const data = await response.json(); // Parse JSON data
        setUserData(data[userName]); // Set the data in state
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    }
    fetchData();
  }, [userName]);
  return (
    <div>
      <h1>My name is {userData?.name}</h1>
      <li>Name : {userData?.name}</li>
      <li>age : {userData?.age}</li>
    </div>
  );
}

export default User;
