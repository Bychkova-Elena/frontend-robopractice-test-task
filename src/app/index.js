import React, { useState, useEffect } from "react";

export const App = () => {
    
   const [users, setUsers] = useState();
    
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
    <div>
                {users && users.map((user) => (
                    <React.Fragment key={user.id}>
                        <div>
                            {user.Fullname}
                        </div>
                  </React.Fragment>
                ))}
     </div>
    )
}
