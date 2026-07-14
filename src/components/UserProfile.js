import React, { useEffect, useState } from "react";
import { app } from "@microsoft/teams-js";

function UserProfile() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function loadUser() {
      try {
        await app.initialize();

        const context = await app.getContext();

        const userNameString = JSON.stringify(
          context.user.displayName
        );

        setUserName(userNameString);
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
  }, []);

  return (
    <div>
      <h2>User Information</h2>
      <p>{userName}</p>
    </div>
  );
}

export default UserProfile;
