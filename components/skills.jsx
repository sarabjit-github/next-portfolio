import Image from "next/image";
import styles from "../styles/skills.module.css";
import utilStyles from "../styles/utils.module.css";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiFigma,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      skillIcon: <SiHtml5 />,
    },
    {
      name: "CSS",
      skillIcon: <SiCss3 />,
    },
    {
      name: "Tailwind",
      skillIcon: <SiTailwindcss />,
    },
    {
      name: "JavaScript",
      skillIcon: <SiJavascript />,
    },

    {
      name: "React",
      skillIcon: <SiReact />,
    },
    {
      name: "Redux",
      skillIcon: <SiRedux />,
    },
    {
      name: "Next.js",
      skillIcon: <SiNextdotjs />,
    },
    {
      name: "Figma",
      skillIcon: <SiFigma />,
    },
    {
      name: "Github",
      skillIcon: <SiGithub />,
    },
  ];
  return (
    <>
      <section className={styles.skillSection}>
        <div className={styles.header}>
          <h1 className={utilStyles.headingXl}>
            <span>#</span>skills
          </h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.skillsContainer}>
          {skills.map(({ skillIcon, name }, index) => {
            return (
              <div className={styles.skill} key={index}>
                {skillIcon}
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
