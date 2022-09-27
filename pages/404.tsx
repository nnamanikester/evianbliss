import * as React from "react";

interface Page404Props {}

const Page404: React.FC<Page404Props> = () => {
  return (
    <>
      <div className="error-page">
        <div>404 Not Found</div>
      </div>
    </>
  );
};

export default Page404;
