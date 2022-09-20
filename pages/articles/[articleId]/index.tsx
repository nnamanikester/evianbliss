import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Breadcrum from "../../../components/Breadcrum";
import MetaTags from "../../../components/MetaTags";
import Offer from "../../../components/Offer";
import config from "../../../config";

interface ArticlePageProps {
  article: {
    title: string;
  };
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
  const { query } = useRouter();

  return (
    <>
      <MetaTags
        title={`${article.title ?? "Hair Styling "} Article`}
        url={`https://evianbliss.com/articles/${query.articleId}`}
      />

      <div className="article">
        <div className="container mb-2">
          <Breadcrum
            links={[
              { title: "Home", url: "/", currentPage: false },
              { title: "articles", url: "/articles", currentPage: false },
              { title: article.title, currentPage: true },
            ]}
          />

          <div className="article-parallax">
            {/*  */}
            <Image
              placeholder="blur"
              blurDataURL={config.BLUR_URL}
              alt={`Evian Bliss Hair Spa in Enugu - ${article.title}`}
              src={require("/public/images/blog-background.jpg")}
            />
            <h1 className="article-title">
              {article.title} This is a super sotry, the life was just a sorrow
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="row blog-box">
            <div className="col-8 write-up">
              <p className="date">July 22, 2022.</p>

              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  aspernatur rerum quod ullam enim quaerat tenetur laudantium
                  placeat et sed ex, ad facere porro veniam accusamus est quia
                  iure fugiat!
                </p>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum corporis commodi dignissimos voluptas voluptatibus in,
                  fuga delectus corrupti. Id quos explicabo recusandae beatae
                  sunt repellat illum eius architecto eveniet. Quibusdam! Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Hic rerum
                  veritatis debitis! Totam, asperiores maxime exercitationem
                  autem ullam tenetur quo culpa et debitis ratione commodi quis.
                  Doloremque atque voluptatum adipisci?
                </p>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam, dicta quasi culpa adipisci eum earum? Facere nostrum
                  labore quod ex soluta repellendus voluptatem officia illo
                  repudiandae molestiae, minus blanditiis voluptatum.
                </p>

                <h4>What is article title?</h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis quam sed ad debitis eum? Adipisci eveniet accusamus
                  numquam officiis aut, impedit atque minus delectus ipsa fugit!
                  Vero dolore autem odit?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  iusto aut ducimus eligendi nam odit illo numquam vel harum,
                  cum commodi quibusdam dolorem, consequuntur qui optio eum
                  quidem magni rem?
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  pariatur quo adipisci animi doloribus? At non temporibus
                  corporis impedit voluptatem, maiores dolorum, quos facere
                  aspernatur ipsum libero, provident perspiciatis nesciunt!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti praesentium eius reprehenderit sed aspernatur odit
                  totam vel hic, voluptate cupiditate sequi, maxime odio
                  eligendi architecto, quis excepturi. Accusantium, sequi
                  mollitia.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis quam sed ad debitis eum? Adipisci eveniet accusamus
                  numquam officiis aut, impedit atque minus delectus ipsa fugit!
                  Vero dolore autem odit?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  iusto aut ducimus eligendi nam odit illo numquam vel harum,
                  cum commodi quibusdam dolorem, consequuntur qui optio eum
                  quidem magni rem?
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  pariatur quo adipisci animi doloribus? At non temporibus
                  corporis impedit voluptatem, maiores dolorum, quos facere
                  aspernatur ipsum libero, provident perspiciatis nesciunt!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti praesentium eius reprehenderit sed aspernatur odit
                  totam vel hic, voluptate cupiditate sequi, maxime odio
                  eligendi architecto, quis excepturi. Accusantium, sequi
                  mollitia.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  veniam alias saepe totam officia, ad iusto eligendi
                  perspiciatis beatae aliquam incidunt placeat error voluptates
                  sint explicabo omnis perferendis laboriosam in.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  veniam alias saepe totam officia, ad iusto eligendi
                  perspiciatis beatae aliquam incidunt placeat error voluptates
                  sint explicabo omnis perferendis laboriosam in.
                </p>

                <h4>Benefits of doing article title</h4>

                <ul>
                  <li>
                    <span className="bold">
                      Shop the neares article title –{" "}
                    </span>{" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi culpa error praesentium, qui tempora exercitationem
                    rem nam blanditiis sequi veniam! Eligendi sed odit, delectus
                    dolorem blanditiis impedit. Rem, quasi quisquam?
                  </li>

                  <li>
                    <span className="bold">
                      Shop the neares article title –{" "}
                    </span>{" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi culpa error praesentium, qui tempora exercitationem
                    rem nam blanditiis sequi veniam! Eligendi sed odit, delectus
                    dolorem blanditiis impedit. Rem, quasi quisquam?
                  </li>

                  <li>
                    <span className="bold">
                      Shop the neares article title –{" "}
                    </span>{" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi culpa error praesentium, qui tempora exercitationem
                    rem nam blanditiis sequi veniam! Eligendi sed odit, delectus
                    dolorem blanditiis impedit. Rem, quasi quisquam?
                  </li>

                  <li>
                    <span className="bold">
                      Shop the neares article title –{" "}
                    </span>{" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi culpa error praesentium, qui tempora exercitationem
                    rem nam blanditiis sequi veniam! Eligendi sed odit, delectus
                    dolorem blanditiis impedit. Rem, quasi quisquam?
                  </li>

                  <li>
                    <span className="bold">
                      Shop the neares article title –{" "}
                    </span>{" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi culpa error praesentium, qui tempora exercitationem
                    rem nam blanditiis sequi veniam! Eligendi sed odit, delectus
                    dolorem blanditiis impedit. Rem, quasi quisquam?
                  </li>

                  <li>
                    <span className="bold">
                      Shop the neares article title –{" "}
                    </span>{" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi culpa error praesentium, qui tempora exercitationem
                    rem nam blanditiis sequi veniam! Eligendi sed odit, delectus
                    dolorem blanditiis impedit. Rem, quasi quisquam?
                  </li>
                </ul>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, quasi dolores culpa inventore fuga perferendis
                  voluptatum! Blanditiis voluptatibus ex cumque nulla magni quam
                  doloremque provident ullam officiis nisi. Quas, fugit.
                </p>
              </div>
            </div>
            <div className="col-3 offer-box">
              <div className="blog">
                <div className="blog-image">
                  <Image
                    placeholder="blur"
                    blurDataURL={config.BLUR_URL}
                    alt="Evian Bliss Hair Spa Question and Answer"
                    src={require("/public/images/joyful-african.jpg")}
                  />
                </div>
                <article className="blog-content">
                  <p className="blog-date">July 14, 2021.</p>
                  <h4 className="blog-title">
                    How to convert a relaxed hair to a natural hair
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptas ea amet quam ab perspiciatis totam magni assumenda.
                  </p>
                </article>
                <div className="blog-footer">
                  <a href="#">
                    Learn More{" "}
                    <span className="lni lni-arrow-right icon-small" />
                  </a>
                </div>
              </div>
              <div className="blog">
                <div className="blog-image">
                  <Image
                    placeholder="blur"
                    blurDataURL={config.BLUR_URL}
                    alt="Evian Bliss Hair Spa Question and Answer"
                    src={require("/public/images/joyful-african.jpg")}
                  />
                </div>
                <article className="blog-content">
                  <p className="blog-date">July 14, 2021.</p>
                  <h4 className="blog-title">
                    How to convert a relaxed hair to a natural hair
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptas ea amet quam ab perspiciatis totam magni assumenda.
                  </p>
                </article>
                <div className="blog-footer">
                  <a href="#">
                    Learn More{" "}
                    <span className="lni lni-arrow-right icon-small" />
                  </a>
                </div>
              </div>

              <Offer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async () => {
  return {
    props: {
      article: {
        title: "Article Title",
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          articleId: "article-title",
        },
      },
      {
        params: {
          articleId: "article-title-1",
        },
      },
      {
        params: {
          articleId: "article-title-2",
        },
      },
    ],
    fallback: false,
  };
};

export default ArticlePage;
