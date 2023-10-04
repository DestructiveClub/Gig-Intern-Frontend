import React, { useEffect, useHistory, useLocation } from "react";
// import {  } from "react-router-dom";

const GoogleRedirect = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.hash.substring(1));
    const accessToken = params.get("access_token");

    // Store the access token in your app's state or context for future API requests
    // You can also perform user authentication and store user info here

    // Redirect to your desired route
    history.push("/admin"); // Replace with your desired route
  }, [ location, history ]);

  return <div>Redirecting...</div>;
};

export default GoogleRedirect;
