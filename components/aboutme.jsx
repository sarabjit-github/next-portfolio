import Image from "next/image";
import Link from "next/link";
import Skills from "./skills";
import styles from "../styles/aboutme.module.css";
import utilStyles from "../styles/utils.module.css";
import hoodieBoy2Img from "../public/images/hoodie-boy-2.png";
import logo2img from "../public/images/logo2.png";

export default function Aboutme({ home }) {
  return (
    <>
      <section
        className={styles.aboutSection}
        style={{ marginTop: !home ? "4rem":"" }}
      >
        <div className={styles.header}>
          <h1 className={utilStyles.headingXl}>
            <span>{home ? "#" : "/"}</span>about-me
          </h1>
          {home && <div className={styles.line}></div>}
        </div>
        {!home && <h3 className={utilStyles.headingSm}>Who am I?</h3>}
        <div className={styles.aboutContent}>
          <div className={styles.left}>
            <div>Hello, i’m Sarbjit Singh!</div>
            <div>
              I’m a self-taught front-end developer based in Punjab, India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </div>
            <div>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </div>
            {home && <Link href="/about">
              <button>Read more -&gt;</button>
            </Link>}
            
          </div>
          <div className={styles.right}>
            <Image
              src={hoodieBoy2Img}
              className={styles.aboutImg}
              alt="about img"
            />
            <div className={styles.pattren}>
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
            <div className={styles.pattren2}>
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
        </div>
        {!home && <Skills />}
        {!home && <div className={styles.funFacts}>
          <h1 className={utilStyles.headingXl}>
            <span>#</span>my-fun-facts
          </h1>
          <div>
            <div className={styles.factsWrapper}>
              <div>I like winter more than summer</div>
              <div>
                I like <span>orange</span> and <span>mango</span>
              </div>
              <div>
                My favroite superhero is <span>Ironman</span>
              </div>
              {/* when i start to learn web dev then i was thinking i can   */}
              <div>
                I can hack website with <span>html</span>
              </div>
              <div>I like to play racing games</div>
              <div>
                My favroite game is <span>NFS Most Wanted</span>
              </div>
            </div>
            <div className={styles.pattrenWrapper}>
              <div className={styles.pattren1}>
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
              <Image className={styles.pattrenImg} src={logo2img} alt="pattren img" />
            </div>
          </div>
        </div>}
      </section>
    </>
  );
}
