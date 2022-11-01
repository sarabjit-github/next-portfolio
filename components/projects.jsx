import Image from "next/image";
import Link from "next/link";
import styles from "../styles/projects.module.css";
import utilStyles from "../styles/utils.module.css";
import portfolioProjectImg from "../public/images/portfolio-project.png";
import coffeeProjectImg from "../public/images/coffee-project.png";
import weatherProjectImg from "../public/images/weather-project.png";
import hostingerProjectImg from "../public/images/hostinger-project.png";
import emptyImg from "../public/images/empty-pimg.png";

export default function Projects({ home }) {
  const projects = [
    {
      id: 1,
      title: "Coffee Shop App",
      techs: "React, Redux Toolkit, Scss, Framer motion (Animation library)",
      github: "https://github.com/sarabjit-github/coffee-shop",
      live: "https://coffee-shop-beta.vercel.app/",
      projectImg: coffeeProjectImg,
    },
    {
      id: 2,
      title: "Microsoft Todo Clone App",
      techs: "React, Context Api, Scss",
      github: "https://github.com/sarabjit-github/nano-todo",
      live: "https://nano-todo.netlify.app/",
      projectImg: undefined,
    },
    {
      id: 3,
      title: "Amazing Portfolio",
      techs: "React, Fiebase (Database), Scss",
      github: undefined,
      live: "https://sarabjitsingh.live/",
      projectImg: portfolioProjectImg,
    },
    {
      id: 4,
      title: "Google Weather Clone",
      techs: "React, Fiebase (Database), Scss",
      github: "https://github.com/sarabjit-github/weather-app",
      live: "https://google-weather.netlify.app/",
      projectImg: weatherProjectImg,
    },
    {
      id: 5,
      title: "Hostinger Redesign",
      techs: "React, Figma, Framer Motion(Animation library), Scss",
      github: "https://github.com/sarabjit-github/hostinger-redesign",
      live: "https://hostinger-new.vercel.app/",
      projectImg: hostingerProjectImg,
    },
  ];
  return (
    <section className={styles.projectSection}>
      <div className={styles.header}>
        <div>
          <h1 className={utilStyles.headingXl}>
            <span>{home ? "#" : "/"}</span>projects
          </h1>
          {home && <div className={styles.line}></div>}
        </div>
        {/* Try to make this arrow here ~~> */}
        {home && <Link href="/works">View all ~~&gt;</Link>}
      </div>
      {!home && <h3 className={utilStyles.headingSm}>List of my projects</h3>}
      <div className={styles.projectsContainer}>
        {home
          ? projects
              .slice(0, 3)
              .map(({ id, title, techs, github, live, projectImg }) => {
                return (
                  <div className={styles.projectWrapper} key={id}>
                    <div className={styles.projectImgWrapper}>
                      <Image
                        className={styles.projectImg}
                        src={projectImg || emptyImg}
                        alt="project img"
                      />
                    </div>
                    <div className={styles.skills}>
                      <h3>{techs}</h3>
                    </div>
                    <div className={styles.about}>
                      <h2 className={utilStyles.headingMd}>{title}</h2>
                      <p>
                        Personal portfolio website with firebase integration
                      </p>
                      <div className={styles.buttonsContainer}>
                      <a href={live} target="_blank" rel="noreferrer">
                        <button>Live &lt;~&gt;</button>
                      </a>
                      <a href={github} target="_blank" rel="noreferrer">
                        <button>Github &lt;~&gt;</button>
                      </a>
                    </div>
                    </div>
                  </div>
                );
              })
          : projects.map(({ id, title, techs, github, live, projectImg }) => {
              return (
                <div className={styles.projectWrapper} key={id}>
                  <div className={styles.projectImgWrapper}>
                    <Image
                      className={styles.projectImg}
                      src={projectImg || emptyImg}
                      alt="project img"
                    />
                  </div>
                  <div className={styles.skills}>
                    <h3>{techs}</h3>
                  </div>
                  <div className={styles.about}>
                    <h2 className={utilStyles.headingMd}>{title}</h2>
                    <p>Personal portfolio website with firebase integration</p>
                    <div className={styles.buttonsContainer}>
                      <a href={live} target="_blank" rel="noreferrer">
                        <button>Live &lt;~&gt;</button>
                      </a>
                      <a href={github} target="_blank" rel="noreferrer">
                        <button>Github &lt;~&gt;</button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
}
