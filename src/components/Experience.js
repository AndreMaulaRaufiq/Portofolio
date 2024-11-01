import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:!w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:!text-xl xs:!text-lg">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary capitalize dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:!text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:!text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:!text-6xl xs:!text-4xl md:!mb-16">Experience</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:!w-[90%] md:!w-full">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:!w-[2px] md:!left-[30px] xs:!left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:!ml-2 ">
          <Details
            position="Full-Stack Developer"
            company="PT Tiga Serangkai Pustaka Mandiri"
            companyLink="https://www.tigaserangkai.com/"
            time="Februari 2024 - July 2024"
            address="Surakarta, Indonesia"
            work="Developed a comprehensive web and mobile-based asset management system utilizing full-stack technologies. Applied Scrum methodology to enhance project delivery and team collaboration. Managed and optimized software asset management processes, leading to improved resource allocation and cost efficiency"
          />
          <Details
            position="Mobile Development Apprenticeship"
            company="Bangkit Academy 2023 by Google, GoTo, Traveloka"
            companyLink="https://grow.google/intl/id_id/bangkit/"
            time="Februari 2023 - July 2023"
            address="Indonesia"
            work=" Completed an intensive mobile development program, focusing on Android application development using Kotlin. Collaborated on projects that emphasized modern mobile interface design and best practices in Android development. Achieved a deep understanding of mobile development lifecycle from concept to deployment."
          />
          <Details
            position="Mobile Application Developer Apprenticeship"
            company="Infinite Learning"
            companyLink="https://www.infinitelearning.id/"
            time="September 2022 - January 2023"
            address="Batam, Indonesia"
            work="Developed Android applications as part of a collaborative team within the Kampus Merdeka program. Utilized Kotlin and Android Studio to create user-friendly mobile applications. Focused on mobile interface design and user experience, ensuring applications met high standards of usability and performance."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
