import React from "react";
import TBody from "../TBody/TBody";
import THead from "../THead/THead";
import "./style.css";

    
const Table: React.FC = () => (
  <table>
    <THead />
    <TBody/>
  </table>
);

export default React.memo(Table);