import Link from "next/link";
import styles from "../styles/contact.module.css";
import utilStyles from "../styles/utils.module.css";
import { SiInstagram, SiLinkedin, SiGmail, SiTwitter } from "react-icons/si";

export default function Contact({ home }) {
  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.header}>
          <h1 className={utilStyles.headingXl}>
            <span>{home ? "#" : "/"}</span>contacts
          </h1>
          {home && <div className={styles.line}></div>}
        </div>
        {!home && <h3 className={utilStyles.headingSm}>Who am I?</h3>}
        <div className={styles.contactWrapper}>
          <div className={styles.left}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me.
          </div>
          <div className={styles.right}>
            {!home && (
              <div>
                <h3>Support me here</h3>
                <a href="#">
                  <SiInstagram />
                  <span>Instagram</span>
                </a>
              </div>
            )}
            <div>
              <h3>Message me here</h3>
              <a href="#">
                <SiGmail />
                <span>websachin111@gmail.com</span>
              </a>
              <a href="#">
                <SiLinkedin />
                <span>Linkedin</span>
              </a>
              <a href="#">
                <SiInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        {/* all media */}
        {!home && <div className={styles.allMedia}>
          <h1 className={utilStyles.headingXl}>
            <span>#</span>all-media
          </h1>
          <div className={styles.allMediaWrapper}>
            <a href="#">
              <SiInstagram />
              <span>Instagram</span>
            </a>
            <a href="#">
              <SiLinkedin />
              <span>Linkedin</span>
            </a>
            <a href="#">
                <SiTwitter />
                <span>Twitter</span>
              </a>
          </div>
        </div>}
      </section>
    </>
  );
}
