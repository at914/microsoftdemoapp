import React, { useEffect, useState } from "react";
import { app } from "@microsoft/teams-js";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        await app.initialize();

        const context = await app.getContext();
        const userName = context.user.displayName;
const userNameString = JSON.stringify(userName);
        console.log(context.user);

        setUser(context.user);
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Information</h2>

      <p>Name: {user.displayName}</p>
    <p>{userNameString}</p>
      
      
    </div>
  );
}

export default UserProfile;
