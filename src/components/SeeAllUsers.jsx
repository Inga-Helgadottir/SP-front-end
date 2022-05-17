import React from "react";
import { seeAllUsersUrl } from "../settings";
import { useState, useEffect } from "react";
import "../styles/seeAllUsers.css";

const SeeAllUsers = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
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
    return data;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>User name</th>
          <th>Roles</th>
        </tr>
      </thead>

      <tbody>
        {userList.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.userName}</td>
              {user.roleList.map((role, index) => {
                return <td key={index}>{role.roleName}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SeeAllUsers;
