import { app, authentication } from "@microsoft/teams-js";

export const getUserProfile = async () => {
  try {
    await app.initialize();

    const token = await authentication.getAuthToken();

    const response = await fetch(
      "/api/user/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};