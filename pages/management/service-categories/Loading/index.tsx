import * as React from "react";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <>
      <div className="loading-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loading;
