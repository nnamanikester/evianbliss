import type { GetServerSideProps, NextPage } from "next";
import { getCsrfToken } from "next-auth/react";
import { useRouter } from "next/router";
import Breadcrum from "../../components/Breadcrum";
import MetaTags from "../../components/MetaTags";

interface LoginPageProps {
  csrfToken: string;
}

const LoginPage: NextPage<LoginPageProps> = ({ csrfToken }) => {
  const { query } = useRouter();

  return (
    <>
      <MetaTags title="Login" />

      <div className="login">
        <div className="container">
          <Breadcrum
            links={[
              { title: "Home", currentPage: false, url: "/" },
              { title: "Login", currentPage: true },
            ]}
          />
        </div>
        <div className="container">
          <div className="login-box">
            <h1 className="mb-2">Sign In.</h1>
            <form method="POST" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              {query.error && (
                <p className="text-danger mb-2">
                  An error occured. Please try again. Make sure the email is
                  valid.
                </p>
              )}
              <div className="input-group mb-2">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="input"
                  placeholder="Enter email address"
                />
              </div>

              <button
                type="submit"
                className="btn btn__primary btn__full-width"
              >
                Sign in with Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      csrfToken,
    },
  };
};
