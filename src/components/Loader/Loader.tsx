import React, { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "auto",
  };
  const color = "#ad51f4";
  return (
    <ClipLoader color={color} cssOverride={override} size={150} aria-label="Loading Spinner" />
  );
};

export default Loader;
