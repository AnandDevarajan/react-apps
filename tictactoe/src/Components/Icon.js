import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle />;
    case "cross":
      return <FaTimes />;
    default:
      return <FaPen />;
  }
};
export default Icon;
