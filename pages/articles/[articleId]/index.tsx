import type { NextPage } from "next";
import { useRouter } from "next/router";
import MetaTags from "../../../components/MetaTags";

interface ArticlePageProps {
  article: any;
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
  const { query } = useRouter();

  return (
    <>
      <MetaTags
        title={`${article.title ?? "Hair Styling "} Article`}
        url={`https://evianbliss.com/articles/${query.articleId}`}
      />

      <div className="service"></div>
    </>
  );
};

export default ArticlePage;
