import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import HireMe from "@/components/HireMe";
import { GithubIcon, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic2 from "../../public/images/profile/amr2.png";
import profilePic1 from "../../public/images/profile/developer-pic-1.png";
import project2 from "../../public/images/projects/protecme.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 2.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-3 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 2.05 }} transition={{ duration: 0.2 }} />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Andre Maula Raufiq | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light">
        {/* Home Section */}
        <Layout className="pt-0 md:pt-16 sm:pt-8" id="Home">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={profilePic1} alt="Andre Maula Raufiq" className="w-full h-auto lg:hidden md:inline-block md:w-full" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative full-stack applications. Explore my latest projects, showcasing my expertise in UI/UX Designers and Full-Stack Development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link href="mailto:andremr107@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <HireMe className="!items-start" />
        </Layout>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Andre Maula Raufiq" className="w-full h-full" />
        </div>

        {/* About Section */}
        <section className="w-full pt-16" id="about">
          <Layout className="pt-16">
            <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8 text-center" />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              {/* Biography Text */}
              <div className="col-span-4 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                <p className="font-medium text-dark dark:text-light sm:text-sm">
                  I am a dedicated Full Stack Developer with a comprehensive understanding of the software development lifecycle. My journey has been marked by a commitment to creating innovative solutions and optimizing processes through
                  the application of Scrum methodologies and agile practices.
                </p>
              </div>
              {/* Profile Image */}
              <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark xl:col-span-8 xl:order-1">
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full" />
                <Image src={profilePic2} alt="Profile Pic" className="w-full h-auto rounded-2xl" />
              </div>
            </div>
          </Layout>
        </section>

        {/* Skills & Experience Section */}
        <section className="w-full py-16" id="skills">
          <Layout>
            <AnimatedText text="Skills & Experience" className="mb-16 text-center" />
            <div className="grid w-full grid-cols-12 gap-16">
              <div className="col-span-6 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Skills</h2>
                <Skills />
              </div>
              <div className="col-span-6 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Experience</h2>
                <Experience />
              </div>
            </div>
          </Layout>
        </section>

        {/* Featured Projects Section */}
        <section className="w-full py-16" id="projects">
          <Layout>
            <AnimatedText text="Featured Projects" className="mb-16 text-center" />
            <div className="flex flex-col gap-y-16">
              <FeaturedProject
                type="Featured Project"
                title="ProtectMe"
                summary="A mobile app designed to protect individuals from violence or harassment, offering features for emergency alerts and support resources."
                img={project2}
                link="https://play.google.com/store/apps/details?id=com.example.protectme"
                github="https://github.com/andre/protectme"
              />
              {/* Add more FeaturedProject components here */}
            </div>
          </Layout>
        </section>
      </main>
    </>
  );
}