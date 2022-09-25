import * as React from "react";
import Loading from "../../pages/management/service-categories/Loading";

interface ScreenLoadingProps {}

const ScreenLoading: React.FC<ScreenLoadingProps> = () => {
  return (
    <>
      <div className="screen-loading">
        <Loading />
      </div>
    </>
  );
};

export default ScreenLoading;
