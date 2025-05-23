import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Top from "./Top";
import TopRocket from "./TopRocket";
import Cloud from "../models/Cloud";
import Text from "./Text";
import ConsoleContactForm from "./ConsoleCOntactForm";
import { Blob } from "react-interactive-blob";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Skeleton from "../models/Skeleton";
import MushRoom from "./MushRoom";
import { rotate } from "three/webgpu";

const Page = forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  const pages = useRef();
  const homeSection = useRef();
  const projects = useRef();
  const rocketSection = useRef();
  const endSection = useRef();
  const marqueeRef = useRef(null);
  const marqueeRef2 = useRef(null);

  const contentRef = useRef(null);
  const textRef = useRef(null);
  const mushRoomRef = useRef(null);
  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      xPercent: -50, // Moves the text by 50% (halfway) to create an infinite loop
      duration: 20, // Adjust speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });
    
    const marquee2 = marqueeRef2.current;

    gsap.to(marquee2, {
      xPercent: -50, // Moves the text by 50% (halfway) to create an infinite loop
      duration: 20, // Adjust speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, []);

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

    const ctx = gsap.context(() => {
      gsap.from(homeSection.current, {
        opacity: 0,
        // y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: "power2.out",
      });
    });

    return () => {
      animactionss.forEach((animactions) => {
        animactions.kill();
      });
      ctx.revert();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    getHome: () => homeSection.current,
    getProject: () => projects.current,
  }));

  const items = [
    "JAVA",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "NODE",
    "JUPYTERNOTEBOOK",
    "INTELIJ",
    "PHP",
    "PYTHON",
    "BOOTSTRAP",
    "TAILWIND",
    "NPM",
    "ARDUINO",
    "THREEJS",
    "REACT",
    "REACTNATIVE",
    "FIREBASE",
    "TERMINAL",
    "AI",
    "DOCKER",
    "CI/CD",
    "GIT",
    "VSCODE",
    "ANDROID"
  ];

  return (
    <div
      ref={pages}
      className=" box-border flex flex-col align-middle z-40"
      id="main"
    >
      <section
        id="home"
        ref={homeSection}
        className="w-screen p-5 box-border flex justify-center items-center"
        style={{
          minHeight: "100vh",
          maxHeight: "fit-content",
        }}
      >
        <div
          ref={contentRef}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            height: "fit-content",
            minWidth: "fit-content",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          className="lg:w-1/2 rounded-3xl shadow-lg p-6 md:flex md:items-center"
        >
          <div
            className="md:w-1/3"
            style={{
              height: 500,
            }}
          >
            <Canvas>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={1} />
              <hemisphereLight
                groundColor="#000000"
                color="#FFFFFF"
                intensity={1}
              />
              <OrbitControls />
              <MushRoom
                scale={[1.3, 1.3, 1.3]}
                position={[0.2, -2, 0]}
                rotation={[0, -(Math.PI / 3), 0]}
              />
            </Canvas>
          </div>
          <div ref={textRef} className="md:w-2/3 md:ml-6 ">
            <img
              width={200}
              src="/Fsdev.png"
              style={{
                position: "absolute",
                right: 0,
                top: -100,
                transform: "rotate(15deg)",
              }}
            />
            <img
              width={200}
              src="/st.png"
              style={{
                position: "absolute",
                right: 0,
                top: 100,
              }}
            />
            <p className="text-white">Hi , I am</p>
            <h2 className="text-6xl font-semibold mb-2 text-white">KANISHKA</h2>
            <h2 className="text-6xl font-semibold mb-2 text-white">
              MEDANKARA
            </h2>

            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              &#x276F; Fullstack Developer
            </h2>
            <br />
            <div className="flex gap-1 flex-col" style={{ fontSize: 18 }}>
              <p className="text-gray-400">// my number</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">contact </span> =
                "+94705715007";
              </p>

              <p className="text-gray-400">// whatsapp number</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">whatsapp </span> =
                "+94759058519";
              </p>

              <p className="text-gray-400">// my e-mail</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">email </span> =
                "110kqnishkamedankara110@gmail.com";
              </p>

              <p className="text-gray-400">// check out my projects on,</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">github </span> =
                <a href="https://github.com/110kanishkamedankara110">
                  "https://github.com/110kanishkamedankara110"
                </a>
                ;
              </p>

              <p className="text-gray-400">// languages</p>
              <p className="text-white">
                <span className="text-pink-400">String [ ] </span>
                <span className="text-green-300">languages </span> =
                &#x2774;&nbsp;{" "}
                <span className="text-yellow-300">
                  "java"&nbsp;,&nbsp;"javaScript"&nbsp;,&nbsp;"python"
                </span>
                &nbsp; &#x2775;;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ transform: "translateX(-100%)", height: "fit-content" }}
        className="sec p-5 box-border flex flex-col "
      >
        <div
          className="w-full flex flex-wrap justify-center flex-row"
          ref={projects}
          style={{}}
        >
          <img width={200} src="/ai.png" />
          <img width={200} src="/css.png" />
          <img width={200} src="/dev.png" />
          <img width={200} src="/do.png" />
          <img width={200} src="/Fsdev.png" />
          <img width={200} src="/git.png" />
          <img width={200} src="/ju.png" />
          <img width={200} src="/and.png" />

          <img width={200} src="/html.png" />
          <img width={200} src="/int.png" />
          <img width={200} src="/java.png" />
          <img width={200} src="/node.png" />
          <img width={200} src="/php.png" />
          <img width={200} src="/py.png" />
          <img width={200} src="/term.png" />
          <img width={200} src="/vs.png" />
          <img width={200} src="/arduno.png" />
          <img width={200} src="/bs.png" />
          <img width={200} src="/fb.png" />
          <img width={200} src="/npm.png" />
          <img width={200} src="/react.png" />
          <img width={200} src="/js.png" />
        </div>
      </section>
      <section
        style={{ height: "fit-content" }}
        className="box-border flex flex-col mt-28"
      >
         <div
          className="h-14 text-white flex items-center overflow-hidden whitespace-nowrap relative"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div ref={marqueeRef2} className="flex gap-4">
            {[...items, ...items].map((item, index) => (
              <span key={index} className="mx-1">
                {index !== items.length * 2 - 1 && "•"} {item}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(20px)",
            borderRadius: "8px",
            padding: "20px",
            width: "100%",
            textAlign: "center",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
              alignContent: "center",
              justifyItems: "center",
            }}
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=110kanishkamedankara110&theme=dark&hide_border=false&include_all_commits=true&count_private=true"
              alt="GitHub Stats"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=110kanishkamedankara110&theme=dark&hide_border=false"
              alt="GitHub Streak"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=110kanishkamedankara110&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
              alt="Top Languages"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>

          <img
            src="https://raw.githubusercontent.com/110kanishkamedankara110/110kanishkamedankara110/output/github-contribution-grid-snake.svg"
            alt="GitHub Contribution Snake"
            style={{ borderRadius: "8px" }}
          />
          <img
            src="https://github-contributor-stats.vercel.app/api?username=110kanishkamedankara110&limit=5&theme=dracula&combine_all_yearly_contributions=true"
            alt="Top Contributed Repo"
            style={{ maxWidth: "100%", borderRadius: "8px", marginTop: 50 }}
          />
        </div>

        <div
          className=" h-14 text-white flex items-center overflow-hidden whitespace-nowrap relative"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div ref={marqueeRef} className="flex gap-4">
            {[...items, ...items].map((item, index) => (
              <span key={index} className="mx-1">
                {index !== items.length * 2 - 1 && "•"} {item}
              </span>
            ))}
          </div>
        </div>
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
        <Text>Python</Text>
        <Text>JavaScript</Text>
        <div className="w-full h-full box"></div>
      </section>

      <section
        style={{ transform: "translateX(-100%)" }}
        className="sec h-screen box-border flex flex-col justify-center"
        ref={endSection}
      >
        <div className="h-full w-full box">
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
