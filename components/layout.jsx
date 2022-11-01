import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import styles from "../styles/layout.module.css";

export const siteTitle = "Sarbjit Singh";
export default function Layout({ children }) {
  return (
    <>
      <div className={styles.pageWrapper}>
        <Head>
          <link rel="shortcut icon" href="https://nextjs.org/static/favicon/favicon-32x32.png" type="image/x-icon" />
          <title>{siteTitle}</title>
          <meta name="description" content="Sarbjit Singh portfolio" />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <div className={styles.sideSocial}>
          <div className={styles.line}></div>
          <a href="https://github.com/sarabjit-github" target="_blank" rel="noreferrer">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/sarbjit-singh-a823bb223/" target="_blank" rel="noreferrer">
          <SiLinkedin />
          </a>
          <a href="#">
          <SiInstagram />
          </a>
        </div>
        <div className={styles.mainContainer}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
