import React, { useCallback } from "react";

function useAPI() {
  const makeAPICall = useCallback(async (url, config) => {
    try {
      const res = await fetch(url, config);
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
      return { data: null, success: false, error: "Something went wrong" };
    }
  }, []);

  const signUp = useCallback(
    async (email_address) => {
      return await makeAPICall("/api/users/signup", {
        method: "PUT",
        body: JSON.stringify({ email_address }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const unsubscribe = useCallback(
    async (email_address) => {
      return await makeAPICall("/api/users/unsubscribe", {
        method: "DELETE",
        body: JSON.stringify({ email_address }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  return { signUp, unsubscribe };
}

export default useAPI;
