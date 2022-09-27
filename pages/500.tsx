import * as React from "react";

interface Page500Props {}

const Page500: React.FC<Page500Props> = () => {
  return (
    <>
      <div className="error-page">
        <div>500 Server Error</div>
      </div>
    </>
  );
};

export default Page500;
