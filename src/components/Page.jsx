import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Top from "./top";
import TopRocket from "./TopRocket";
import Cloud from "../models/Cloud";
import Text from "./Text";
import ConsoleContactForm from "./ConsoleCOntactForm";

const Page = forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  const pages = useRef();
  const homeSection = useRef();
  const projects = useRef();
  const rocketSection = useRef();
  const endSection = useRef();

  useEffect(() => {
    const children = pages.current.children;

    const animactionss = [];

    gsap.utils.toArray(children).forEach((child, index) => {
      const direction = Math.pow(-1, index);
      const startX = 50 * direction;

      const animactions = gsap.fromTo(
        child,
        { x: 0 + "%", opacity: 1 },
        {
          x: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: child,
            start: "top 90%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      animactionss.push(animactions);
    });

    gsap.fromTo(
      pages.current.style,
      { backgroundColor: "#a2d2ff" },
      {
        backgroundColor: "rgb(211 255 130)",
        duration: 1,
        scrollTrigger: {
          trigger: home.current,
          start: "top top",
          end:'bottom bottom',
          scrub: true,
        },
      }
    );


    gsap.fromTo(
      pages.current.style,
      { backgroundColor: "rgb(211 255 130)" },
      {
        backgroundColor: "rgb(196 239 246)",
        duration: 1,
        scrollTrigger: {
          trigger: rocketSection.current,
          start: "top top",
          end:'bottom 50%',
          scrub: true,
          markers:1
        },
      }
    );
    gsap.fromTo(
      pages.current.style,
      { backgroundColor: "rgb(196 239 246)" },
      {
        backgroundColor: "rgb(21 25 25)",
        duration: 1,
        scrollTrigger: {
          trigger: endSection.current,
          start: "top 50%",
          end:'bottom bottom',
          scrub: true,
          markers:true,
        },
      }
    );


    return () => {
      animactionss.forEach((animactions) => {
        animactions.kill();
      });
    };
  }, []);

  useImperativeHandle(ref, () => ({
    getHome: () => homeSection.current,
    getProject: () => projects.current,
  }));

  return (
    <div
      ref={pages}
      className=" box-border flex flex-col align-middle z-40"
      id="main"
      style={{backgroundColor: "#a2d2ff"}}
    >
      <section
        id="home"
        ref={homeSection}
        className=" w-screen p-5 h-screen box-border flex justify-center items-center"
      >
        <div
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            width: "fit-content",
            height: "fit-content",
          }}
          className="lg:w-10/12 bg-blue-950 rounded-3xl shadow-lg p-6 md:flex md:items-center"
        >
          <div className="md:w-1/3">
            <img
              src="https://via.placeholder.com/150"
              alt="Kanishka"
              className="rounded-full mx-auto mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-2/3 md:ml-6">
            <h2 className="text-2xl font-semibold mb-2 text-white">About Me</h2>
            <p className="text-white">
              Hi, I’m Kanishka, a 24-year-old developer currently working as an
              Associate Software Engineer at Exon Software Solutions. I
              specialize in various programming languages including Java,
              JavaScript, and Python.
            </p>
            <p className="mt-4 text-white">
              I am passionate about building efficient and scalable
              applications. I enjoy learning new technologies and continuously
              improving my skills to stay current in the fast-paced world of
              software development.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{ transform: "translateX(-100%)" }}
        className=" sec p-5 h-screen box-border flex flex-col justify-center"
      >
        <div
          className="h-full w-full "
          ref={projects}
          style={{
          }}
        ></div>
      </section>

      <section
        style={{
          // backgroundColor: "rgb(211 255 130)",
          transform: "translateX(-100%)",
          height: "fit-content",
        }}
        className="sec p-5 h-screen box-border flex flex-col justify-center"
        ref={rocketSection}
      >
        <Text>Java</Text>
        <Text>JavaScript</Text>
        <Text>React</Text>
        <div className="w-full h-full box"></div>
      </section>

      <section
        style={{ transform: "translateX(-100%)" }}
        className="sec h-screen box-border flex flex-col justify-center"
        ref={endSection}
      >
        <div
          className="h-full w-full box"
         
        >
          <ConsoleContactForm />
        </div>
      </section>

      <Top
        className="lg:w-10/12"
        pages={pages}
        projects={projects}
        home={homeSection}
      />
      <TopRocket end={endSection} rocket={rocketSection} />
      <Cloud rocket={rocketSection} />
    </div>
  );
});

export default Page;
