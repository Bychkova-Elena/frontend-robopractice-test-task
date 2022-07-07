import React from "react";
import { UserType } from "../../types";
import ResizableTable from "../ResizableTable";
import TRow from "../TRow";
import "./style.css";

export type TableProps = {
  users: UserType[];
};
    
const Table: React.FC<TableProps> = ({ users }) => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const requestSort = React.useCallback(() => { 
    users = users.reverse();
    console.log(users)
  },
    [users]
  );
  return (
    <ResizableTable resizable={true} resizeOptions={{}}>
    <thead>
      <tr>
          <th>User<button type="button" onClick={() => { requestSort() }}>
          &#8593;
        </button></th>
        {numbers && numbers.map((i) => (
          <th key={i}>
            {i}
          </th>
        ))}
        <th>Monthly</th>
      </tr>
    </thead>
    <tbody>
      {users && users.map((user) => (
        <React.Fragment key={user.id}>
          <TRow user={user} />
        </React.Fragment>
      ))}
    </tbody>
  </ResizableTable>
)};

  export default React.memo(Table);