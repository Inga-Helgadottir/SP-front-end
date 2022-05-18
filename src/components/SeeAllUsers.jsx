import React from "react";
import { seeAllUsersUrl } from "../settings";
import { useState, useEffect } from "react";
import "../styles/seeAllUsers.css";

const SeeAllUsers = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let error = localStorage.getItem("error");
    setError(error);

    const getUsers = async () => {
      const fromAPI = await getUserList();
      setUserList(fromAPI);
    };
    getUsers();
  }, []);

  const getUserList = async () => {
    let token = localStorage.getItem("token");
    const res = await fetch(seeAllUsersUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "x-access-token": token,
      },
    });
    const data = await res.json();
    if (data.code === 403) {
      setError(false);
      localStorage.setItem("error", false);
    } else {
      setError(true);
      localStorage.setItem("error", true);
    }
    return data;
  };

  console.log(error);

  return (
    <div>
      {error ? (
        <table>
          <thead>
            <tr>
              <th>User name</th>
              <th colSpan="2">Roles</th>
            </tr>
          </thead>

          <tbody>
            {userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.userName}</td>
                  {user.roleList.map((role, index) => {
                    if (user.roleList.length === 1) {
                      return (
                        <td colSpan="2" key={index}>
                          {role.roleName}
                        </td>
                      );
                    } else {
                      return <td key={index}>{role.roleName}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>You do not have access to this page</h2>
      )}
    </div>
  );
};

export default SeeAllUsers;
