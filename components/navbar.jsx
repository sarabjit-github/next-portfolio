import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const router = useRouter();
  const [sideNavbar, setSideNavbar] = useState(false);
  const handleSideNavbar = ()=>{
    setSideNavbar(!sideNavbar)
  }
  return (
    <>
      <header className={styles.header}>
        <nav>
          <div className="left">
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
          </div>
          <div className="right">
            <div className={styles.navLinks}>
              <Link
                href="/"
                className={`${styles.link} ${
                  router.pathname === "/" ? `${styles.linkActive}` : ""
                }`}
              >
                <span>#</span>home
              </Link>
              <Link
                href="/works"
                className={`${styles.link} ${
                  router.pathname === "/works" ? `${styles.linkActive}` : ""
                }`}
              >
                <span>#</span>works
              </Link>
              <Link
                href="/about"
                className={`${styles.link} ${
                  router.pathname === "/about" ? `${styles.linkActive}` : ""
                }`}
              >
                <span>#</span>about-me
              </Link>
              <Link
                href="/contacts"
                className={`${styles.link} ${
                  router.pathname === "/contacts" ? `${styles.linkActive}` : ""
                }`}
              >
                <span>#</span>contacts
              </Link>
            </div>
            <div className={styles.hamMenu} onClick={handleSideNavbar}>
              <AiOutlineMenu />
            </div>
          </div>
        </nav>
        <div className={styles.sideNav} style={{left: sideNavbar ? "0":"-100%"}}>
          <div className={styles.sideNavLinks}>
            <Link
              href="/"
              className={`${styles.link} ${
                router.pathname === "/" ? `${styles.linkActive}` : ""
              }`
            }
            onClick={handleSideNavbar}
            >
              <span>#</span>home
            </Link>
            <Link
              href="/works"
              className={`${styles.link} ${
                router.pathname === "/works" ? `${styles.linkActive}` : ""
              }`
            }
            onClick={handleSideNavbar}
            >
              <span>#</span>works
            </Link>
            <Link
              href="/about"
              className={`${styles.link} ${
                router.pathname === "/about" ? `${styles.linkActive}` : ""
              }`
            }
            onClick={handleSideNavbar}
            >
              <span>#</span>about-me
            </Link>
            <Link
              href="/contacts"
              className={`${styles.link} ${
                router.pathname === "/contacts" ? `${styles.linkActive}` : ""
              }`
            }
            onClick={handleSideNavbar}
            >
              <span>#</span>contacts
            </Link>
          </div>
          <div className={styles.sideNavSocial}>
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
        </div>
      </header>
    </>
  );
}
