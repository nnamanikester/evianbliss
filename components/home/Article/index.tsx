import Image from "next/future/image";
import Link from "next/link";
import * as React from "react";
import config from "../../../config";
import Carousel from "../../Carousel";

interface ArticleProps {}

export const Article: React.FC<ArticleProps> = () => {
  const articleRef = React.useRef(null);

  return (
    <>
      <section className="articles">
        <div className="container">
          <h3 className="mb-3">From The Blog</h3>

          <Carousel
            text=""
            itemRef={articleRef}
            componentClasses="articles-list row"
          >
            <div className="article" ref={articleRef}>
              <div className="article-image">
                <Image
                  placeholder="blur"
                  blurDataURL={config.BLUR_URL}
                  alt="Evian Bliss Hair Spa Question and Answer"
                  src={require("/public/images/joyful-african.jpg")}
                />
              </div>
              <article className="article-content">
                <p className="article-date">July 14, 2021.</p>

                <Link href="/articles/article-title">
                  <h4 className="article-title">
                    How to convert a relaxed hair to a natural hair
                  </h4>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas ea amet quam ab perspiciatis totam magni assumenda
                  aliquam nesciunt incidunt voluptate, quae quidem, in placeat,
                  libero nam. Nulla, mollitia? Reiciendis.
                </p>
              </article>
              <div className="article-footer">
                <Link href="/articles/article-title">
                  <a>
                    Learn More{" "}
                    <span className="lni lni-arrow-right icon-small" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="article" ref={articleRef}>
              <div className="article-image">
                <Image
                  placeholder="blur"
                  blurDataURL={config.BLUR_URL}
                  alt="Evian Bliss Hair Spa Question and Answer"
                  src={require("/public/images/joyful-african.jpg")}
                />
              </div>
              <article className="article-content">
                <p className="article-date">July 14, 2021.</p>

                <Link href="/articles/article-title">
                  <h4 className="article-title">
                    How to convert a relaxed hair to a natural hair
                  </h4>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas ea amet quam ab perspiciatis totam magni assumenda
                  aliquam nesciunt incidunt voluptate, quae quidem, in placeat,
                  libero nam. Nulla, mollitia? Reiciendis.
                </p>
              </article>
              <div className="article-footer">
                <Link href="/articles/article-title">
                  <a>
                    Learn More{" "}
                    <span className="lni lni-arrow-right icon-small" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="article" ref={articleRef}>
              <div className="article-image">
                <Image
                  placeholder="blur"
                  blurDataURL={config.BLUR_URL}
                  alt="Evian Bliss Hair Spa Question and Answer"
                  src={require("/public/images/joyful-african.jpg")}
                />
              </div>
              <article className="article-content">
                <p className="article-date">July 14, 2021.</p>
                <Link href="/articles/article-title">
                  <h4 className="article-title">
                    How to convert a relaxed hair to a natural hair
                  </h4>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas ea amet quam ab perspiciatis totam magni assumenda
                  aliquam nesciunt incidunt voluptate, quae quidem, in placeat,
                  libero nam. Nulla, mollitia? Reiciendis.
                </p>
              </article>
              <div className="article-footer">
                <Link href="/articles/article-title">
                  <a>
                    Learn More{" "}
                    <span className="lni lni-arrow-right icon-small" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="article" ref={articleRef}>
              <div className="article-image">
                <Image
                  placeholder="blur"
                  blurDataURL={config.BLUR_URL}
                  alt="Evian Bliss Hair Spa Question and Answer"
                  src={require("/public/images/joyful-african.jpg")}
                />
              </div>
              <article className="article-content">
                <p className="article-date">July 14, 2021.</p>

                <Link href="/articles/article-title">
                  <h4 className="article-title">
                    How to convert a relaxed hair to a natural hair
                  </h4>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas ea amet quam ab perspiciatis totam magni assumenda
                  aliquam nesciunt incidunt voluptate, quae quidem, in placeat,
                  libero nam. Nulla, mollitia? Reiciendis.
                </p>
              </article>
              <div className="article-footer">
                <Link href="/articles/article-title">
                  <a>
                    Learn More{" "}
                    <span className="lni lni-arrow-right icon-small" />
                  </a>
                </Link>
              </div>
            </div>
          </Carousel>

          <div className="text-center mt-3">
            <Link href="/articles">
              <a className="btn btn__primary">Read Our Blog</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
