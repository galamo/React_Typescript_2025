import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
const SECURE_URL = "http://localhost:2200/api/secure";
export default function AsyncProtectedRoute() {
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Protected route loaded")
    async function auth() {
      try {
        if (!lsHelper()) {
          setIsLoading(false);
          setIsTokenValid(false);
          return;
        }
        const result = await axios.get(SECURE_URL, {
          headers: {
            authorization: lsHelper(),
          },
        });
        if (result.status === 200) {
          setIsLoading(false);
          setIsTokenValid(true);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsTokenValid(false);
      }
    }
    auth();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>loading...</h1>
      ) : isTokenValid ? (
        <Outlet />
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
}

function lsHelper() {
  return localStorage.getItem("token");
}
