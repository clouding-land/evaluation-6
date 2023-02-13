
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Samsitha Banu - Portfolio",
  keywords: "react developer,web app developer",
  description:
    "I come with an web app background meaning that my React apps are practically indistinguishable from real native apps. Unlike web developers I know that mobile does not have unlimited resources, I optimize apps until animations and functionalities run smoothly. I worked in the no.1 corporate sector in India for 12 years, as well as worked on self-startup and other startups, and now working at an MNC as a React Native Developer (Sr. Software Engineer). I have developed 40+ native android applications using java while working as a freelancer and developed 10+ hybrid apps using React.",
};

export default Meta;
