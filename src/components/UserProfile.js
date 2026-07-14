import React, { useEffect, useState } from "react";
import { getUserProfile } from "../services/GraphService";

function UserProfile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    async function loadUser() {
      try {
        const profile = await getUserProfile();
        setUser(profile);
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();

  }, []);

  if (!user)
    return <div>Loading...</div>;

  return (
    <div>
      <h2>User Information</h2>

      <p>Name: {user.displayName}</p>
      <p>Email: {user.mail}</p>
      <p>Job Title: {user.jobTitle}</p>
      <p>Department: {user.department}</p>
    </div>
  );
}

export default UserProfile;