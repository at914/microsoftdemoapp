import React, { useEffect, useState } from "react";
import { app } from "@microsoft/teams-js";
import ChatApp from "./ChatApp";

function UserProfile() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function loadUser() {
      try {
        await app.initialize();

        const context = await app.getContext();

        // Get UPN directly (no JSON.stringify)
        const userPrincipalName = context.user.userPrincipalName || "";

        const capitalize = (str) =>
          str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

        // Extract name before @
        const namePart = userPrincipalName.split("@")[0];

        // Split first and last name
        const [firstName = "", lastName = ""] = namePart.split(".");

        const fullName = `${capitalize(firstName)} ${capitalize(lastName)}`.trim();

        setUserName(fullName);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    }

    loadUser();
  }, []);

  return (
    <div>
      <ChatApp userName={userName} />
    </div>
  );
}

export default UserProfile;
