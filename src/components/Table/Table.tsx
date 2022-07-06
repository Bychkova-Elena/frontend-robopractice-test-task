import React from "react";
import { UserType } from "../../types";
import THead from "../THead/THead";
import TRow from "../TRow";
import "./style.css";

export type TableProps = {
  users: UserType[];
};
    
const Table: React.FC<TableProps> = ({ users }) => (
  <table>
    <THead />
    <tbody>
      {users && users.map((user) => (
        <React.Fragment key={user.id}>
          <TRow user={ user } />
        </React.Fragment>
        ))}
  </tbody>
  </table>
);

export default React.memo(Table);