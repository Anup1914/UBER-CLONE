import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(UserDataContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/user-login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        //console.log(err);
        localStorage.removeItem("token");
        navigate("/user-login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return <>{children}</>;
};

export default UserProtectedWrapper;
