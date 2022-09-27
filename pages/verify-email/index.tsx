import type { NextPage } from "next";
import Breadcrum from "../../components/Breadcrum";
import MetaTags from "../../components/MetaTags";

const VerifyEmailPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Verify Email" />

      <div className="login">
        <div className="container">
          <Breadcrum
            links={[
              { title: "Home", currentPage: false, url: "/" },
              { title: "Verify Email", currentPage: true },
            ]}
          />
        </div>

        <div className="container">
          <div className="login-box">
            <h4 className="text-center mb-2">Check your inbox.</h4>
            <p className="text-center">
              A link was sent to your email for verification, click on it to
              login.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmailPage;
