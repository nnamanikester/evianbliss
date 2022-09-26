import * as React from "react";
import cx from "classnames";

interface LoadingProps {
  size: "small" | "medium" | "large";
}

const Loading: React.FC<LoadingProps> = ({ size = "medium" }) => {
  return (
    <>
      <div
        className={cx({
          "loading-ring": true,
          "loading-small": size === "small",
          "loading-medium": size === "medium",
          "loading-large": size === "large",
        })}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loading;
