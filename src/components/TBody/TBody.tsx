import React, { useState, useEffect } from "react";
import { UserType } from "../../types";
import TRow from "../TRow";

const TBody: React.FC = () => {
   const [users, setUsers] = useState<UserType[]>([]);
     
   useEffect(() => {
      function getUsers() {
    fetch('/api/users', {
               method: "GET",
               mode: 'no-cors',
               headers: {
                   'Content-Type': 'application/json'
               }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setUsers(data)
        })
        .catch((error) => {
            console.log('error', error)
        })
       }
       getUsers()
    }, []);

  return (
    <tbody>
      {users && users.map((user) => (
        <React.Fragment key={user.id}>
          <TRow user={ user } />
        </React.Fragment>
        ))}
  </tbody>
)};

export default React.memo(TBody);