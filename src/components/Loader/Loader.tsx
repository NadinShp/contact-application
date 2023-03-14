import { CSSProperties } from "react";
import DotLoader from "react-spinners/ClipLoader";

const Loader = () => {
  const override: CSSProperties = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "150px",
  };
  const color = "#ad51f4";
  return <DotLoader color={color} cssOverride={override} size={50} aria-label="Loading Spinner" />;
};

export default Loader;
