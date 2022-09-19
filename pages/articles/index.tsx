import type { NextPage } from "next";
import MetaTags from "../../components/MetaTags";

const ArticlesPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Articles" url="https://evianbliss.com/articles" />

      <div className="articles"></div>
    </>
  );
};

export default ArticlesPage;
