import React, { useState, useEffect, useCallback } from "react";
import Input from "../components/Input";
import Table from "../components/Table";
import { UserType } from "../types";


function App() {

  const [users, setUsers] = useState<UserType[]>([]);
  const [search, setSearch] = useState<UserType[]>([]);
     
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
          setUsers(data);
          setSearch(data)
        })
        .catch((error) => {
            console.log('error', error)
        })
       }
       getUsers()
    }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(users.filter((user) => {
      return user.Fullname.toLowerCase().includes(event.target.value.toLowerCase());
    }));
    },
    [users]
  );
    
   return (
     <div>
       <Input
         placeholder="Поиск по имени"
         onChange={handleChange}
            />
       <Table users={ search } />
     </div>
    )
}

export default (App);