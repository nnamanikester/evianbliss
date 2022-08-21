import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  url,
  image,
  keywords,
}) => {
  const defaultTitle = `${
    title ?? "Evian Bliss"
  }  - Natural and Artifical Hair Spa In Nigeria.`;
  const defaultDescription = "Evian Bliss Hair Spa.";
  const defaulltUrl = "https://evianbliss.com/";
  const defaultImage = "/public/images/logo.png";

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Destreetboard" />

        <title>{defaultTitle}</title>
        <meta name="title" content={defaultTitle} />
        <meta name="description" content={description ?? defaultDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url ?? defaulltUrl} />
        <meta property="og:title" content={defaultTitle} />
        <meta
          property="og:description"
          content={description ?? defaultDescription}
        />
        <meta property="og:image" content={image ?? defaultImage} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url ?? defaulltUrl} />
        <meta property="twitter:title" content={defaultTitle} />
        <meta
          property="twitter:description"
          content={description ?? defaultDescription}
        />
        <meta property="twitter:image" content={image ?? defaultImage} />

        <meta
          name="keywords"
          content={
            keywords +
            " evian, bliss, evian bliss, hair spa, evian bliss hair spa, best hair spa in nigeria"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default MetaTags;
