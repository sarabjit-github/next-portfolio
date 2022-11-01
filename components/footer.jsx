import Link from "next/link";
import { SiInstagram, SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.leftRightContainer}>
          <div className={styles.left}>
            <div>
              <Link href="/" className={styles.logo}>
                <span className="logo-img">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.logoSvg}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className={styles.logoText}>Sarbjit</span>
              </Link>
              <a href="mailto:websachin111@gmail.com">websachin111@gmail.com</a>
            </div>
            <p>Web designer and front-end developer based in India</p>
          </div>
          <div className={styles.right}>
            <h2>Media</h2>
            <div className={styles.media}><a href="#">
                <SiGithub />
            </a>
            <a href="#">
                <SiLinkedin />
            </a>
            <a href="#">
                <SiTwitter />
            </a>
            <a href="#">
                <SiInstagram />
            </a></div>
          </div>
        </div>
        <div className={styles.copyright}>
        © Copyright 2022. Made by Sarbjit Singh
        </div>
      </footer>
    </>
  );
}
