import * as React from "react";
import Loading from "../Loading";

interface ScreenLoadingProps {}

const ScreenLoading: React.FC<ScreenLoadingProps> = () => {
  return (
    <>
      <div className="screen-loading">
        <Loading size="large" />
      </div>
    </>
  );
};

export default ScreenLoading;
