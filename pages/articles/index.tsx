import type { NextPage } from "next";
import Image from "next/future/image";
import Breadcrum from "../../components/Breadcrum";
import MetaTags from "../../components/MetaTags";
import Offer from "../../components/Offer";
import config from "../../config";

const ArticlesPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Articles" url="https://evianbliss.com/articles" />

      <div className="articles">
        <div className="container mb-2">
          <Breadcrum
            links={[
              { title: "Home", url: "/", currentPage: false },
              { title: "Articles", currentPage: true },
            ]}
          />

          <h1>Articles</h1>
        </div>

        <section className="container">
          <div className="row">
            <div className="col-8 articles-row">
              <div className="row articles-list">
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
                <div className="article">
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
                    <h4 className="article-title">
                      How to convert a relaxed hair to a natural hair
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas ea amet quam ab perspiciatis totam magni
                      assumenda aliquam nesciunt incidunt voluptate, quae
                      quidem, in placeat, libero nam. Nulla, mollitia?
                      Reiciendis.
                    </p>
                  </article>
                  <div className="article-footer">
                    <a href="#">
                      Learn More{" "}
                      <span className="lni lni-arrow-right icon-small" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 mb-3">
                <a href="#" className="btn btn__primary">
                  <span className="icon lni lni-reload" /> Load More
                </a>
              </div>
            </div>

            <div className="col-4 offer-col">
              <Offer />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticlesPage;
