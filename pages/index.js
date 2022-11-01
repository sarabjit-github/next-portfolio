import Image from "next/image";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Aboutme from "../components/aboutme";
import Contact from "../components/contact";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import hoodieBoy from "../public/images/hoodie-boy.png";
import logo2 from "../public/images/logo2.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className={styles.heroSection}>
        <div className={styles.left}>
          <h1 className={utilStyles.headingXl}>
            Sarbjit is a <span>web designer</span> and{" "}
            <span>front-end developer</span>
          </h1>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <Link href="/contacts">
            <button>Contact me!!</button>
          </Link>
        </div>
        <div className={styles.right}>
          <Image
            src={logo2}
            alt="logo pattren"
            className={styles.logoPattren}
          />
          <Image
            priority
            src={hoodieBoy}
            alt="Hoodie boy"
            className={styles.hoodieImg}
          />
          <div className={styles.bottomHeading}>
            <span className={styles.colorBox}></span>
            <p>
              Currently working on <b>Portfolio</b>
            </p>
          </div>
          <div className={styles.dotPattren}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
      {/* quote section */}
      <article className={styles.quote}>
        <div className={utilStyles.headingMd}>
          With great power comes great electricity bill
        </div>
        <div className="bottom">
          - Dr. Who
          <span className={`${styles.comma} ${styles.comma2}`}>&quot;</span>
        </div>
        {/* Quotes entities values: `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` */}
        <span className={`${styles.comma} ${styles.comma1}`}>&quot;</span>
      </article>
      {/* projects section */}
      <Projects home={true} />
      {/* skills section */}
      <Skills />
      {/* about section */}
      <Aboutme home={true} />
      <Contact home={true} />
    </>
  );
}
